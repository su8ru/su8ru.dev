import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";
import { IconButton, useColorMode } from "@chakra-ui/react";

const ToggleColorModeButton: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      aria-label="Switch Color Theme"
      icon={colorMode === "light" ? <BsMoon /> : <BsSun />}
      onClick={toggleColorMode}
    />
  );
};

export default ToggleColorModeButton;
