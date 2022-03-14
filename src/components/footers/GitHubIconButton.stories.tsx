import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import GitHubIconButton from "components/footers/GitHubIconButton";

export default {
  component: GitHubIconButton,
} as ComponentMeta<typeof GitHubIconButton>;

const Template: ComponentStory<typeof GitHubIconButton> = (args) => (
  <GitHubIconButton {...args} />
);

export const Main = Template.bind({});
