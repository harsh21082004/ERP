import { useEffect } from 'react';
import Head from 'next/head';

import AppUIShell from '~/components/core/AppUIShell';
import { useRequestStates } from '~/hooks';
import { authApi } from '~/api';
import { extractResponseError } from '~/api/utils';
import { PageContainerFlex } from '~/components/layout/PageContainer';
import { useAppContext } from '~/contexts/app';
import PageBackground from '~/components/views/PageBackground/pageBackground';
import HeaderTextLogo from '~/components/molecules/HeaderTextLogo';
import FollowUsOnX from '~/components/molecules/FollowUsOnX';
import { BoxConditionalDisplay } from '~/components/atoms';

import JoinPageView from './components/joinPageView/joinPageView';

const JoinPage = () => {
  const { setUser } = useAppContext();
  const [fetchUserRequestStates, fetchUserRequestHandlers] = useRequestStates();

  const fetchProfile = async () => {
    try {
      fetchUserRequestHandlers.pending();
      const response = await authApi.fetchProfile();
      const userData = response.data;
      setUser(userData);
      fetchUserRequestHandlers.fulfilled(userData);
    } catch (error) {
      const { errorMessage } = extractResponseError(error);
      fetchUserRequestHandlers.rejected(
        errorMessage || 'Something went wrong!'
      );
    }
  };

  useEffect(() => {
    fetchProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const pageTitle = 'Bae App';
  const pageDescription = `BAE is the first dating platform designed specifically for individuals passionate about cryptocurrency. It's a unique space where crypto enthusiasts can meet, connect, and explore relationships with like-minded people, all while enjoying innovative features tailored to their interests.`;
  const canonicalUrl = 'https://www.baeapp.ai';
  const ogTitle = pageTitle;
  const ogDescription = pageDescription;
  const ogImage = 'https://www.baeapp.ai/assets/images/og-image.png';
  const ogUrl = canonicalUrl;
  const twitterTitle = pageTitle;
  const twitterDescription = pageDescription;
  const twitterUrl = canonicalUrl;
  const twitterImage = ogImage;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <link rel="canonical" href={canonicalUrl} />
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={ogTitle} />
        <meta property="og:description" content={ogDescription} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:site_name" content="WebsiteName" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={ogUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@baeappai"></meta>
        <meta name="twitter:title" content={twitterTitle} />
        <meta name="twitter:description" content={twitterDescription} />
        <meta name="twitter:url" content={twitterUrl} />
        <meta name="twitter:image" content={twitterImage}></meta>
      </Head>
      <AppUIShell>
        <PageBackground withOutHeart />
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backdropFilter: 'blur(4px) brightness(0.5)',
          }}
        ></div>
        <PageContainerFlex
          style={{ position: 'relative' }}
          justifyContent="center"
          alignItems="center"
        >
          <BoxConditionalDisplay showOnDesktop>
            <HeaderTextLogo />
            <FollowUsOnX />
          </BoxConditionalDisplay>
          <JoinPageView fetchUserRequestStates={fetchUserRequestStates} />
        </PageContainerFlex>
      </AppUIShell>
    </>
  );
};

export default JoinPage;
