import type { AppProps } from "next/app";
import { useEffect } from "react";
import {
  Box,
  ChakraProvider,
  Container,
  Divider,
  Text,
} from "@chakra-ui/react";
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
      <Container minW="100%" minH="calc(var(--100vh) - 73px)">
        <Component {...pageProps} />
      </Container>
      <Divider />
      <Box p="3">
        <Text color="gray.400" align="center">
          Avatar by yuki.
        </Text>
        <Text color="gray.400" align="center">
          © subaru 2022
        </Text>
      </Box>
    </ChakraProvider>
  );
}

export default MyApp;

const handleResize = () => {
  const height = window.innerHeight;
  document.documentElement.style.setProperty("--100vh", `${height}px`);
};
