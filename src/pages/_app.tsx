import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { ChakraProvider, Container, Flex, Slide } from "@chakra-ui/react";
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
      <Container minW="100%" minH="calc(var(--100vh) - 59px)">
        <Component {...pageProps} />
        <Footer />
        <Slide in={!isTop} direction="bottom">
          <Flex m="2.5" direction="row-reverse">
            <ScrollToTopButton />
          </Flex>
        </Slide>
      </Container>
    </ChakraProvider>
  );
}

export default MyApp;

const handleResize = () => {
  const height = window.innerHeight;
  document.documentElement.style.setProperty("--100vh", `${height}px`);
};
