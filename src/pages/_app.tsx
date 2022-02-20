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
      <Container minW="100%" minH="calc(var(--100vh) - 59px)">
        <Component {...pageProps} />
      </Container>
      <Divider />
      <Box as="footer" p="2">
        <Text color="gray.400" align="center" fontSize="sm">
          Avatar by yukki____01.
        </Text>
        <Text color="gray.400" align="center" fontSize="sm">
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
