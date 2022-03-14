import React from "react";
import dayjs from "dayjs";
import { useBoolean } from "@chakra-ui/hooks";
import {
  Box,
  Flex,
  Heading,
  Image,
  Spacer,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { getFaviconSrcFromHostname, getHostnameFromUrl } from "libs/utils";
import { Article } from "types/article";

const ArticleCard: React.VFC<{
  article: Article;
}> = ({ article: { title, link, isoDate } }) => {
  const [hover, setHover] = useBoolean(false);
  const bgColor = useColorModeValue("gray.100", "whiteAlpha.200");

  return (
    <Box as="a" href={link} target="_blank" rel="noopener">
      <Flex
        direction="column"
        bgColor={bgColor}
        borderRadius="8"
        boxShadow={hover ? "md" : "base"}
        transition="box-shadow .3s"
        height="100%"
        onMouseEnter={setHover.on}
        onMouseLeave={setHover.off}
      >
        <Box flex="1" px="4" pt="3">
          <Heading as="h3" size="sm" lineHeight="base">
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
              htmlWidth="64px"
              htmlHeight="64px"
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
export default ArticleCard;
