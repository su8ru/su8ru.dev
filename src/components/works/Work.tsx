import React from "react";
import { SiGithub } from "react-icons/si";
import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Spacer,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import WorkImage from "components/works/WorkImage";

export interface WorkProps {
  id: string;
  title: string;
  description?: string;
  github?: string;
}

const Work: React.VFC<WorkProps> = ({ id, title, description, github }) => {
  const githubColor = useColorModeValue("#222", "#fff");
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
      {description && <Text mt="2">{description}</Text>}
      <HStack my="6" spacing="4">
        <Box>
          <WorkImage imageId={`${id}-1`} alt={title} />
        </Box>
        <Box>
          <WorkImage imageId={`${id}-2`} alt={title} />
        </Box>
      </HStack>
    </>
  );
};

export default Work;
