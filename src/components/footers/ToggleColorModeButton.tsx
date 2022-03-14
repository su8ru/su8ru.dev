import React from "react";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import {
  IconButton,
  Tooltip,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

const ToggleColorModeButton: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const iconColor = useColorModeValue("gray.500", "gray.400");

  return (
    <Tooltip
      label={`Turn to ${colorMode === "light" ? "Dark" : "Light"} Mode`}
      placement="top"
    >
      <IconButton
        variant="ghost"
        color={iconColor}
        onClick={toggleColorMode}
        fontSize="xl"
        aria-label={`Turn to ${colorMode === "light" ? "Dark" : "Light"} Mode`}
      >
        {colorMode === "light" ? <MdOutlineDarkMode /> : <MdOutlineLightMode />}
      </IconButton>
    </Tooltip>
  );
};

export default ToggleColorModeButton;
