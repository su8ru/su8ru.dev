import React from "react";
import { SiGithub } from "react-icons/si";
import { IconButton, Tooltip, useColorModeValue } from "@chakra-ui/react";

const GitHubIconButton: React.VFC = () => {
  const iconColor = useColorModeValue("gray.500", "gray.400");

  return (
    <Tooltip label="GitHub repository" placement="top">
      <IconButton
        as="a"
        variant="ghost"
        color={iconColor}
        aria-label="GitHub: su8ru/su8ru.dev"
        href="https://github.com/su8ru/su8ru.dev"
        target="_blank"
        rel="noopener"
      >
        <SiGithub />
      </IconButton>
    </Tooltip>
  );
};

export default GitHubIconButton;
