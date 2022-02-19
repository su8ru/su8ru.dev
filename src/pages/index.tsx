import type { NextPage } from "next";
import { SiGithub, SiQiita, SiTwitter, SiZenn } from "react-icons/si";
import {
  Box,
  Container,
  Divider,
  HStack,
  Heading,
  Image,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import SocialLinkButton from "components/SocialLinkButton";
import ToggleColorModeButton from "components/ToggleColorModeButton";

const Home: NextPage = () => {
  const githubColor = useColorModeValue("#222", "#fff");
  const zennColor = useColorModeValue("#3ea8ff", "#b2dcff");
  const qiitaColor = useColorModeValue("#55c500", "#bbe899");

  return (
    <Container maxW="3xl">
      <HStack spacing={12} my="8">
        <Box w="32">
          <Image src="/avatar.png" alt="avatar" />
        </Box>
        <VStack spacing={4} align="left">
          <Heading as="h1" size="xl">
            subaru
          </Heading>
          <HStack mt={2} spacing={4}>
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
          </HStack>
        </VStack>
      </HStack>
      <Divider />
      <ToggleColorModeButton />
    </Container>
  );
};

export default Home;
