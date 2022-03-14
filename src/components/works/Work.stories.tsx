import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Work from "components/works/Work";

export default {
  component: Work,
} as ComponentMeta<typeof Work>;

const Template: ComponentStory<typeof Work> = (args) => <Work {...args} />;

export const Main = Template.bind({});
Main.args = {
  id: "cappuccino",
  title: "CAPPUCCINO System",
  description:
    "QR コード付きリストバンドを用いた文化祭入退場管理システムを 3 人チームで制作・運用しました。",
  github: "afes-website",
};

export const Simple = Template.bind({});
Simple.args = {
  id: "cappuccino",
  title: "CAPPUCCINO System",
};

export const Long = Template.bind({});
Long.args = {
  id: "cappuccino",
  title:
    "文化祭(学校)への入退場、および各展示への入退室を、滞在者のリストバンドに印刷されている QR コードによって管理します",
  description:
    "文化祭(学校)への入退場、および各展示への入退室を、滞在者のリストバンドに印刷されている QR コードによって管理します。それらの情報は、統制局や教職員が管理画面から閲覧でき、全校の各展示の混雑状況をひと目で確認することができます。また、これらの情報から「滞在人数」だけ抜き出し、混雑状況としてヒートマップを一般公開することで、混雑している展示に人が殺到するのを防ぐ狙いもあります。",
  github: "afes-website",
};
