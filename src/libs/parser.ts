import Parser from "rss-parser";
import { Article } from "types/article";

const parser = new Parser();

export const fetchFeedItems = async (url: string): Promise<Article[]> => {
  const feed = await parser.parseURL(url);
  return feed.items
    .map(({ title, link, isoDate }) => ({
      title,
      link,
      isoDate,
    }))
    .filter(
      ({ title, link, isoDate }) => title && link && isoDate
    ) as Article[];
};
