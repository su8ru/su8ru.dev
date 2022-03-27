import React from "react";
import { useBoolean } from "@chakra-ui/hooks";
import { Box, Grid } from "@chakra-ui/react";
import ArticleCard from "components/articles/ArticleCard";
import ShowAllButton from "components/articles/ShowAllButton";
import { Article } from "types/article";

const ArticleCards: React.VFC<{
  articles: Article[];
}> = ({ articles }) => {
  const [showAll, toggleShowAll] = useBoolean(false);

  return (
    <>
      <Grid templateColumns="repeat(2, 1fr)" gap="4">
        {articles
          .slice()
          .reverse()
          .slice(0, showAll ? undefined : 6)
          .map((article) => (
            <ArticleCard article={article} key={article.link} />
          ))}
      </Grid>
      <Box textAlign="center" mt="6">
        <ShowAllButton onClick={toggleShowAll.toggle} showAll={showAll} />
      </Box>
    </>
  );
};

export default ArticleCards;
