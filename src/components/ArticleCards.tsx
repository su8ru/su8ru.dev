import React from "react";
import dayjs from "dayjs";
import {
  Box,
  Flex,
  Grid,
  Heading,
  Image,
  Spacer,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import { getFaviconSrcFromHostname, getHostnameFromUrl } from "libs/utils";
import { Article } from "types/article";

const ArticleCard: React.VFC<{
  article: Article;
}> = ({ article: { title, link, isoDate } }) => {
  const bgColor = useColorModeValue("gray.100", "whiteAlpha.200");

  return (
    <Box as="a" href={link} target="_blank" rel="noopener">
      <Flex
        direction="column"
        bgColor={bgColor}
        borderRadius="8"
        boxShadow="base"
        height="100%"
      >
        <Box flex="1" px="4" pt="3">
          <Heading as="h3" size="sm">
            {title}
          </Heading>
        </Box>
        <Flex px="4" py="3" alignItems="center" wrap="wrap">
          <Flex alignItems="center" mr="4">
            <Image
              src={getFaviconSrcFromHostname(getHostnameFromUrl(link))}
              alt={getHostnameFromUrl(link)}
              width="14px"
              height="14px"
              borderRadius="3px"
              mr="2"
            />
            <Text fontSize="sm" color="gray">
              {getHostnameFromUrl(link)}
            </Text>
          </Flex>
          <Spacer />
          <Text fontSize="sm" color="gray">
            {dayjs(isoDate).format("YYYY/MM/DD")}
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

const ArticleCards: React.VFC<{
  articles: Article[];
}> = ({ articles }) => {
  const cardsPerRow = useBreakpointValue<number>({ base: 1, sm: 2 });

  return (
    <Grid templateColumns={`repeat(${cardsPerRow}, 1fr)`} gap="4">
      {articles.reverse().map((article) => (
        <ArticleCard article={article} key={article.link} />
      ))}
    </Grid>
  );
};

export default ArticleCards;
