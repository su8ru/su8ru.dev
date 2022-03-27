import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import ShowAllButton from "components/articles/ShowAllButton";

export default {
  component: ShowAllButton,
} as ComponentMeta<typeof ShowAllButton>;

const Template: ComponentStory<typeof ShowAllButton> = (args) => (
  <ShowAllButton {...args} />
);

export const Hidden = Template.bind({});
Hidden.args = {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClick: () => {},
  showAll: false,
};

export const Shown = Template.bind({});
Shown.args = {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClick: () => {},
  showAll: true,
};
