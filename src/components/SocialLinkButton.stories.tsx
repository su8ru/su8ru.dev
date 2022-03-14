import React from "react";
import { SiTwitter, SiZenn } from "react-icons/si";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import SocialLinkButton from "components/SocialLinkButton";

export default {
  component: SocialLinkButton,
} as ComponentMeta<typeof SocialLinkButton>;

const Template: ComponentStory<typeof SocialLinkButton> = (args) => (
  <SocialLinkButton {...args} />
);

export const Twitter = Template.bind({});
Twitter.args = {
  id: "@su8ru_",
  colorScheme: "twitter",
  href: "https://twitter.com/su8ru_",
  icon: <SiTwitter />,
};

export const Zenn = Template.bind({});
Zenn.args = {
  id: "@su8ru",
  colorScheme: "twitter",
  href: "https://zenn.dev/su8ru",
  icon: <SiZenn />,
};
