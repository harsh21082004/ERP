import Head from "next/head";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { Toaster } from "react-hot-toast";
import { Web3ModalProvider } from "context";
import { QueryClient, QueryClientProvider } from "react-query";

import AppContextProvider from "~/contexts/app";
import theme from "~/styles/theme";

import "@fontsource/poppins/latin.css";
import "@fontsource/roboto-mono/latin.css";
import "@fontsource/nunito/latin.css";
import "@fontsource/jomhuria/latin.css";
import "@fontsource/press-start-2p/latin.css";
import "@fontsource/rubik";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: ${theme.fontFamilies.base};
    font-size: 16px;
  }

  button,
  input,
  textarea {
    font-family: ${theme.fontFamilies.base};
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  p {
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

function MyApp({ Component, pageProps }) {
  // const initialState = cookieToInitialState(config, headers().get('cookie'));
  const queryClient = new QueryClient();

  return (
    <>
      <GlobalStyle />
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        ></meta>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/brand/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/assets/brand/favicon/favicon-16x16.png"
        />
        <link rel="alternate icon" href="/assets/brand/favicon/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/assets/brand/favicon/apple-touch-icon.png"
        />
        {/* <link
          rel="mask-icon"
          href="/assets/icons/favicon/mask-icon.svg"
          color="#FF7304"
        /> */}
      </Head>
      <AppContextProvider pageProps={pageProps}>
        <Web3ModalProvider>
          <ThemeProvider theme={theme}>
            <QueryClientProvider client={queryClient}>
              <Toaster
                position="top-right"
                containerStyle={{
                  zIndex: 999999,
                }}
              />
              <Component {...pageProps} />
            </QueryClientProvider>
          </ThemeProvider>
        </Web3ModalProvider>
      </AppContextProvider>
    </>
  );
}

export default MyApp;
