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
import WorkImage from "components/WorkImage";

export interface WorkProps {
  title: string;
  description?: string;
  images: ReadonlyArray<string>;
  github?: string;
}

const Work: React.VFC<WorkProps> = ({ title, description, images, github }) => {
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
        {images.map((image) => (
          <Box key={image}>
            <WorkImage src={`/works/${image}`} alt={title} />
          </Box>
        ))}
      </HStack>
    </>
  );
};

export default Work;
