import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import ToggleColorModeButton from "components/footers/ToggleColorModeButton";

export default {
  component: ToggleColorModeButton,
} as ComponentMeta<typeof ToggleColorModeButton>;

const Template: ComponentStory<typeof ToggleColorModeButton> = (args) => (
  <ToggleColorModeButton {...args} />
);

export const Main = Template.bind({});
