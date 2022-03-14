import React from "react";
import {
  Box,
  Divider,
  HStack,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import GitHubIconButton from "components/footers/GitHubIconButton";
import ToggleColorModeButton from "components/footers/ToggleColorModeButton";

const Footer: React.VFC = () => {
  const color = useColorModeValue("gray.500", "gray.400");

  return (
    <>
      <Divider />
      <Box as="footer" p="4">
        <VStack spacing="2">
          <HStack spacing="2">
            <GitHubIconButton />
            <ToggleColorModeButton />
          </HStack>
          <VStack spacing="1">
            <Text color={color} align="center" fontSize="sm">
              Avatar by yukki____01.
            </Text>
            <Text color={color} align="center" fontSize="sm">
              © subaru 2022
            </Text>
          </VStack>
        </VStack>
      </Box>
    </>
  );
};

export default Footer;
