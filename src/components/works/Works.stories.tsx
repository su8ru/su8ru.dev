import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Works from "components/works/Works";

export default {
  component: Works,
} as ComponentMeta<typeof Works>;

const Template: ComponentStory<typeof Works> = (args) => <Works {...args} />;

export const Main = Template.bind({});
