import React from "react";
import { SiGithub } from "react-icons/si";
import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Image,
  Spacer,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";

export interface WorkProps {
  title: string;
  imageKey: string;
  github?: string;
}

const Work: React.VFC<WorkProps> = ({ title, imageKey, github }) => {
  const githubColor = useColorModeValue("#222", "#fff");
  const bgColor = useColorModeValue("gray.200", "gray.700");
  const showGitHubButton = useBreakpointValue<boolean>({
    base: false,
    sm: true,
  });

  return (
    <>
      <Flex mt="10">
        <Heading as="h3" size="md">
          {title}
        </Heading>
        <Spacer />
        {github && showGitHubButton && (
          <Button
            as="a"
            color={githubColor}
            variant="link"
            size="sm"
            leftIcon={<SiGithub />}
            href={`https://github.com/${github}`}
            target="_blank"
            rel="noopener"
          >
            {github}
          </Button>
        )}
      </Flex>
      <HStack my="6">
        <Box>
          <Image
            src={`/works/${imageKey}-1.png`}
            alt={title}
            borderRadius="8"
            bg={bgColor}
            boxShadow="base"
            htmlWidth="1500px"
            htmlHeight="1000px"
          />
        </Box>
        <Box>
          <Image
            src={`/works/${imageKey}-2.png`}
            alt={title}
            borderRadius="8"
            bg={bgColor}
            boxShadow="base"
            htmlWidth="1500px"
            htmlHeight="1000px"
          />
        </Box>
      </HStack>
    </>
  );
};

export default Work;
