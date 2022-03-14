import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import ScrollToTopButton from "components/ScrollToTopButton";

export default {
  component: ScrollToTopButton,
} as ComponentMeta<typeof ScrollToTopButton>;

const Template: ComponentStory<typeof ScrollToTopButton> = (args) => (
  <ScrollToTopButton {...args} />
);

export const Main = Template.bind({});
