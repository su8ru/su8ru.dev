import React from "react";
import * as CSS from "csstype";
import { Button } from "@chakra-ui/react";
import { ThemeTypings } from "@chakra-ui/styled-system";
import { Token } from "@chakra-ui/styled-system/dist/declarations/src/utils";
import { RequireOne } from "types/utils";

type Props = {
  icon: React.ReactElement;
  id: string;
  href: string;
  size?: string;
} & RequireOne<{
  color?: Token<CSS.Property.Color, "colors">;
  colorScheme?: ThemeTypings["colorSchemes"];
}>;

const SocialLinkButton: React.VFC<Props> = ({
  icon,
  id,
  href,
  size = "sm",
  color,
  colorScheme,
}) => {
  return (
    <Button
      as="a"
      color={color}
      colorScheme={colorScheme}
      variant="link"
      size={size}
      leftIcon={icon}
      href={href}
      target="_blank"
      rel="noopener"
    >
      {id}
    </Button>
  );
};

export default SocialLinkButton;
