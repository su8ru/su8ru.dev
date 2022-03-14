import React from "react";
import { Grid } from "@chakra-ui/react";
import ArticleCard from "components/articles/ArticleCard";
import { Article } from "types/article";

const ArticleCards: React.VFC<{
  articles: Article[];
}> = ({ articles }) => {
  return (
    <Grid templateColumns="repeat(2, 1fr)" gap="4">
      {articles
        .slice()
        .reverse()
        .map((article) => (
          <ArticleCard article={article} key={article.link} />
        ))}
    </Grid>
  );
};

export default ArticleCards;
