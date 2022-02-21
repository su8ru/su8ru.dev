import { NextPage } from "next";
import NextLink from "next/link";
import {
  AspectRatio,
  Box,
  Button,
  Container,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";

const Page: NextPage = () => {
  const bgColor = useColorModeValue("#7d7c7a", "#fff");

  return (
    <Container maxW="3xl" pt="8" pb="12" h="100%">
      <VStack>
        <AspectRatio
          w="100%"
          maxW="80"
          ratio={1}
          bgColor={bgColor}
          sx={{ maskImage: "url(/avatar-dotted.png)", maskSize: "contain" }}
        >
          <Box />
        </AspectRatio>
        <Text fontSize="4xl">404 Not Found ...</Text>
        <Box pt="8">
          <NextLink href="/" passHref>
            <Button as="a" colorScheme="blue">
              Back to Home
            </Button>
          </NextLink>
        </Box>
      </VStack>
    </Container>
  );
};

export default Page;
