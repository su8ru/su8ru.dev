import { Box, Divider, Text } from "@chakra-ui/react";

const Footer: React.VFC = () => (
  <>
    <Divider />
    <Box as="footer" p="2">
      <Text color="gray.400" align="center" fontSize="sm">
        Avatar by yukki____01.
      </Text>
      <Text color="gray.400" align="center" fontSize="sm">
        © subaru 2022
      </Text>
    </Box>
  </>
);

export default Footer;
