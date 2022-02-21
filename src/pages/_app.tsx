import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect } from "react";
import { ChakraProvider, Container } from "@chakra-ui/react";
import Footer from "components/Footer";
import theme from "libs/theme";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
    };
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Container minW="100%" minH="calc(var(--100vh) - 59px)">
        <Component {...pageProps} />
        <Footer />
      </Container>
    </ChakraProvider>
  );
}

export default MyApp;

const handleResize = () => {
  const height = window.innerHeight;
  document.documentElement.style.setProperty("--100vh", `${height}px`);
};
