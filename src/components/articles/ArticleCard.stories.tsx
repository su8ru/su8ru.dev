import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import ArticleCard from "components/articles/ArticleCard";

export default {
  component: ArticleCard,
} as ComponentMeta<typeof ArticleCard>;

const Template: ComponentStory<typeof ArticleCard> = (args) => (
  <ArticleCard {...args} />
);

export const Main = Template.bind({});
Main.args = {
  article: {
    title: '文化祭入退場・混雑管理システム "CAPPUCCINO" 開発・運用記',
    link: "https://zenn.dev/su8ru/articles/cappuccino-system",
    isoDate: "2021-11-24T11:15:58.000Z",
  },
};

export const LongTitle = Template.bind({});
LongTitle.args = {
  article: {
    title:
      "月 5.5ドルで使える Vultr で nginx-proxy を構築して frourio を Docker で動かす！",
    link: "https://zenn.dev/su8ru/articles/vultr-nginx-proxy-frourio",
    isoDate: "2021-01-10T03:09:14.000Z",
  },
};

export const ShortTitle = Template.bind({});
ShortTitle.args = {
  article: {
    title: "aspida の API 定義をパッケージ化",
    link: "https://zenn.dev/su8ru/articles/aspida-api-definition-to-package",
    isoDate: "2020-10-24T01:52:16.000Z",
  },
};

export const Qiita = Template.bind({});
Qiita.args = {
  article: {
    title: "frourio でサクッと API 型定義 & コントローラーを書く",
    link: "https://qiita.com/su8ru/items/e4ba6fd311ee3905d174",
    isoDate: "2020-09-25T13:19:40.000Z",
  },
};
