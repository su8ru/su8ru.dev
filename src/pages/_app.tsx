import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { Box, ChakraProvider, Flex, Slide } from "@chakra-ui/react";
import Footer from "components/Footer";
import ScrollToTopButton from "components/ScrollToTopButton";
import theme from "libs/theme";

function MyApp({ Component, pageProps }: AppProps) {
  const [isTop, setIsTop] = useState<boolean>(true);

  const onScroll = (): void => {
    if (window.scrollY > 200) setIsTop(false);
    else setIsTop(true);
  };

  useEffect(() => {
    document.addEventListener("scroll", onScroll);
    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, []);

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
      <Flex minW="100%" minH="var(--100vh)" direction="column">
        <Box as="main" flexGrow="1">
          <Component {...pageProps} />
        </Box>
        <Footer />
        <Slide in={!isTop} direction="bottom">
          <Box m="2.5" position="fixed" right="0" bottom="0">
            <ScrollToTopButton />
          </Box>
        </Slide>
      </Flex>
    </ChakraProvider>
  );
}

export default MyApp;

const handleResize = () => {
  const height = window.innerHeight;
  document.documentElement.style.setProperty("--100vh", `${height}px`);
};
