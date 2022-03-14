import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Footer from "components/footers/Footer";

export default {
  component: Footer,
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

export const Main = Template.bind({});
