import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { BsEnvelopeFill } from "react-icons/bs";
import { SiGithub, SiTwitter, SiZenn } from "react-icons/si";
import dayjs from "dayjs";
import {
  Box,
  Container,
  Divider,
  Heading,
  VStack,
  Wrap,
  useColorModeValue,
} from "@chakra-ui/react";
import QiitaIcon from "components/QiitaIcon";
import SocialLinkButton from "components/SocialLinkButton";
import ArticleCards from "components/articles/ArticleCards";
import Works from "components/works/Works";
import { fetchFeedItems } from "libs/parser";
import { Article } from "types/article";

interface Props {
  articles: Article[];
}

const Home: NextPage<Props> = ({ articles }) => {
  const githubColor = useColorModeValue("#222", "#fff");
  const zennColor = useColorModeValue("#3ea8ff", "#b2dcff");
  const qiitaColor = useColorModeValue("#55c500", "#bbe899");

  return (
    <Container maxW="3xl" pt="8" pb="12">
      <Head>
        <title>subaru</title>
        <meta name="description" content="Personal portfolio of subaru." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@su8ru_" />
        <meta property="og:url" content="https://su8ru.dev" />
        <meta property="og:title" content="subaru" />
        <meta property="og:site_name" content="subaru" />
        <meta
          property="og:description"
          content="Personal portfolio of subaru."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://su8ru.dev/ogimage.png" />
        <link rel="canonical" href="https://su8ru.dev" />
      </Head>
      <Wrap spacing={10} my="8" as="div" align="center">
        <Box w="32" h="32">
          <picture>
            <source type="image/webp" srcSet="/avatar.webp" />
            <source type="image/png" srcSet="/avatar.png" />
            <img src="/avatar.png" alt="avatar" width="700" height="700" />
          </picture>
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
              icon={<QiitaIcon />}
              id="@su8ru"
              href="https://qiita.com/su8ru"
              color={qiitaColor}
            />
          </Wrap>
        </VStack>
      </Wrap>
      <Divider />
      <Heading as="h2" size="lg" mt={12}>
        Works
      </Heading>
      <Box mt="8">
        <Works />
      </Box>
      <Heading as="h2" size="lg" mt={12}>
        Articles
      </Heading>
      <Box mt="8">
        <ArticleCards articles={articles} />
      </Box>
      <Heading as="h2" size="lg" mt={12}>
        Contact
      </Heading>
      <VStack mt="6" alignItems="flex-start">
        <SocialLinkButton
          icon={<BsEnvelopeFill />}
          id="contact@su8ru.dev"
          href="mailto:contact@su8ru.dev"
          color={githubColor}
          size="md"
        />
        <SocialLinkButton
          icon={<SiTwitter />}
          id="@su8ru_"
          href="https://twitter.com/su8ru_"
          colorScheme="twitter"
          size="md"
        />
      </VStack>
    </Container>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const [qiitaArticles, zennArticles] = await Promise.all([
    fetchFeedItems("https://qiita.com/su8ru/feed"),
    fetchFeedItems("https://zenn.dev/su8ru/feed"),
  ]);
  const articles = [...qiitaArticles, ...zennArticles].sort(
    ({ isoDate: a }, { isoDate: b }) => dayjs(a).diff(dayjs(b))
  );
  return {
    props: {
      articles,
    },
  };
};

export default Home;
