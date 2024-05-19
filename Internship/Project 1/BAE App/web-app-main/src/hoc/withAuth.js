import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { useAppContext } from '~/contexts/app';
import { authApi } from '~/api';
import { useRequestStates } from '~/hooks';
import { extractResponseError } from '~/api/utils';
import PageRippleLoader from '~/components/molecules/PageRippleLoader';

const withAuth = (Component) => {
  const Auth = (props) => {
    const router = useRouter();
    const { user, setUser } = useAppContext();
    const [fetchUserRequestStates, fetchUserRequestHandlers] =
      useRequestStates();

    const getUserProfile = async () => {
      try {
        fetchUserRequestHandlers.pending();
        const response = await authApi.fetchProfile();
        const userData = response.data;
        if (!userData.walletAddress) {
          return router.replace({
            pathname: '/join',
          });
        }
        setUser(userData);
        fetchUserRequestHandlers.fulfilled(userData);
      } catch (error) {
        const responseError = extractResponseError(error);
        fetchUserRequestHandlers.rejected(responseError);
      }
    };

    useEffect(() => {
      // If no user found in context, fetch user data
      if (!user?.id) {
        getUserProfile();
      }

      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user]);

    let nodeToRender = null;

    if (fetchUserRequestStates.fulfilled || user?.id) {
      nodeToRender = <Component {...props} />;
    } else if (fetchUserRequestStates.rejected) {
      const { statusCode } = fetchUserRequestStates.error;
      if (statusCode === 401) {
        //Logout and redirect to login. Unauthorized
        router.replace({
          pathname: '/join',
        });
      }
    } else if (fetchUserRequestStates.pending) {
      nodeToRender = <PageRippleLoader />;
    }

    return nodeToRender;
  };

  // Copy getInitial props so it will run as well
  if (Component.getInitialProps) {
    Auth.getInitialProps = Component.getInitialProps;
  }

  return Auth;
};

export default withAuth;
