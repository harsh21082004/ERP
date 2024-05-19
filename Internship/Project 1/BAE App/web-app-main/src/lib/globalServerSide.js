import nookies from 'nookies';

import { userApi } from '~/api';

function getCookiesFromContext(context) {
  return nookies.get(context);
}

function getAuthTokenFromCookies(cookies) {
  return cookies?.auth_token;
}

export async function getGlobalServerSideProps(context) {
  const cookies = getCookiesFromContext(context);
  const authToken = getAuthTokenFromCookies(cookies);

  let user = null;

  if (authToken) {
    try {
      const response = await userApi.fetchUserProfile({
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      user = response.data;
    } catch (e) {
      // const responseStatusCode = e?.response?.status;
      // if (![403, 401].includes(responseStatusCode)) {
      //   throw e;
      // }
    }
  }

  return {
    user,
  };
}
