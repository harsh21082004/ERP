import Head from "next/head";
import Link from "next/link";

import AppUIShell from "~/components/core/AppUIShell";
import { PageContainerFlex } from "~/components/layout/PageContainer";
import PageBackground from "~/components/views/PageBackground/pageBackground";
import { HeaderActions } from "~/components/views/headerActions/headerActions";
import { useIsMobileMedia } from "~/hooks";
import theme from "~/styles/theme";

import PinkButtonWithShadow from "../../components/atoms/Button/PinkButtonWithShadow";

const HomePage = () => {
  const isMobileMedia = useIsMobileMedia();
  const pageTitle = "Bae App";
  const pageDescription = `BAE is the first dating platform designed specifically for individuals passionate about cryptocurrency. It's a unique space where crypto enthusiasts can meet, connect, and explore relationships with like-minded people, all while enjoying innovative features tailored to their interests.`;
  const canonicalUrl = "https://www.baeapp.ai";
  const ogTitle = pageTitle;
  const ogDescription = pageDescription;
  const ogImage = "https://www.baeapp.ai/assets/images/og-image.png";
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
        <PageBackground />

        <PageContainerFlex
          justifyContent="flex-start"
          alignItems="center"
          style={{ paddingTop: isMobileMedia ? "100px" : "40px" }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              gap: "28px",
              alignItems: "center",
              color: "#fff",
              paddingTop: "40px",
            }}
          >
            <div
              style={{
                fontSize: "1rem",
                letterSpacing: "6px",
                fontWeight: 900,
              }}
            >
              PRE-LAUNCH
            </div>
            <div
              style={{
                fontSize: "4rem",
                fontFamily: theme.fontFamilies.pressStart2p,
                textAlign: "center",
              }}
            >
              Bae App
            </div>
            <div
              style={{
                textAlign: "center",
                fontSize: "1.5rem",
                fontWeight: 600,
                fontFamily: theme.fontFamilies.rubik,
              }}
            >
              Join the Airdrop. Get 1500 coins everyday.
            </div>
            <PinkButtonWithShadow
              label="Join Airdrop"
              styles={{ fontSize: "1.5rem" }}
              as={Link}
              href="/join"
            />
          </div>
          <HeaderActions />
        </PageContainerFlex>
      </AppUIShell>
    </>
  );
};

export default HomePage;
