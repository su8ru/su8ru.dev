import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import WorkImage from "components/works/WorkImage";

export default {
  component: WorkImage,
} as ComponentMeta<typeof WorkImage>;

const Template: ComponentStory<typeof WorkImage> = (args) => (
  <WorkImage {...args} />
);

export const Main = Template.bind({});
Main.args = {
  alt: "CAPPUCCINO System",
  imageId: "cappuccino-2",
};

export const Transparent = Template.bind({});
Transparent.args = {
  alt: "CAPPUCCINO System",
  imageId: "cappuccino-1",
};
