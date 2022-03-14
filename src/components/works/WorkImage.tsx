import React, { useEffect } from "react";
import { useBoolean } from "@chakra-ui/hooks";
import { Box, useColorModeValue } from "@chakra-ui/react";
import ImageModal from "components/ImageModal";

export interface WorkImageProps {
  imageId: string;
  alt: string;
}

const WorkImage: React.VFC<WorkImageProps> = ({ imageId, alt }) => {
  const [showModal, setShowModal] = useBoolean(false);
  const [hover, setHover] = useBoolean(false);
  const bgColor = useColorModeValue("gray.100", "whiteAlpha.200");

  useEffect(() => {
    const body = document.querySelector("body");
    if (!body) return;
    body.style.overflowY = showModal ? "hidden" : "visible";
  });

  return (
    <>
      <Box
        borderRadius="8"
        bg={bgColor}
        boxShadow={hover ? "md" : "base"}
        transition="box-shadow .3s"
        cursor="zoom-in"
        overflow="hidden"
        onClick={setShowModal.on}
        onMouseEnter={setHover.on}
        onMouseLeave={setHover.off}
      >
        <picture>
          <source type="image/webp" srcSet={`/works/min/${imageId}.min.webp`} />
          <source type="image/png" srcSet={`/works/min/${imageId}.min.png`} />
          <img
            src={`/works/min/${imageId}.min.png`}
            alt={alt}
            width="1500px"
            height="1000px"
          />
        </picture>
      </Box>
      {showModal && (
        <ImageModal
          src={`/works/${imageId}.png`}
          alt={alt}
          onClose={setShowModal.off}
        />
      )}
    </>
  );
};

export default WorkImage;
