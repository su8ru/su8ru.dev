import type { NextPage } from "next";
import { SiGithub, SiQiita, SiTwitter, SiZenn } from "react-icons/si";
import {
  Box,
  Container,
  Divider,
  Heading,
  Image,
  VStack,
  Wrap,
  useColorModeValue,
} from "@chakra-ui/react";
import SocialLinkButton from "components/SocialLinkButton";
import ToggleColorModeButton from "components/ToggleColorModeButton";
import Works from "components/Works";

const Home: NextPage = () => {
  const githubColor = useColorModeValue("#222", "#fff");
  const zennColor = useColorModeValue("#3ea8ff", "#b2dcff");
  const qiitaColor = useColorModeValue("#55c500", "#bbe899");

  return (
    <Container maxW="3xl" pt="8">
      <Wrap spacing={10} my="8" as="div" align="center">
        <Box w="32">
          <Image src="/avatar.png" alt="avatar" />
        </Box>
        <VStack spacing={4} align="left">
          <Heading as="h1" size="xl">
            subaru
          </Heading>
          <Wrap mt={2} spacing={4} as="div">
            <SocialLinkButton
              icon={<SiGithub />}
              id="@su8ru"
              href="https://github.com/su8ru"
              color={githubColor}
            />
            <SocialLinkButton
              icon={<SiTwitter />}
              id="@su8ru_"
              href="https://twitter.com/su8ru_"
              colorScheme="twitter"
            />
            <SocialLinkButton
              icon={<SiZenn />}
              id="@su8ru"
              href="https://zenn.dev/su8ru"
              color={zennColor}
            />
            <SocialLinkButton
              icon={<SiQiita />}
              id="@su8ru"
              href="https://qiita.com/su8ru"
              color={qiitaColor}
            />
          </Wrap>
        </VStack>
      </Wrap>
      <Divider />
      <Heading as="h2" size="lg" mt={8}>
        Works
      </Heading>
      <Works />
      <Divider />
      <Heading as="h2" size="lg" mt={8}>
        Articles
      </Heading>
      <Box my={2}>
        <ToggleColorModeButton />
      </Box>
    </Container>
  );
};

export default Home;
