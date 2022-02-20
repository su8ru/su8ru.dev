import React, { useEffect } from "react";
import { useBoolean } from "@chakra-ui/hooks";
import { Image, useColorModeValue } from "@chakra-ui/react";
import ImageModal from "components/ImageModal";

export interface WorkImageProps {
  src: string;
  alt: string;
}

const WorkImage: React.VFC<WorkImageProps> = ({ src, alt }) => {
  const [showModal, setShowModal] = useBoolean(false);
  const bgColor = useColorModeValue("gray.100", "whiteAlpha.200");

  useEffect(() => {
    const body = document.querySelector("body");
    if (!body) return;
    body.style.overflowY = showModal ? "hidden" : "visible";
  });

  return (
    <>
      <Image
        src={src}
        alt={alt}
        borderRadius="8"
        bg={bgColor}
        boxShadow="base"
        htmlWidth="1500px"
        htmlHeight="1000px"
        cursor="zoom-in"
        onClick={setShowModal.on}
      />
      {showModal && (
        <ImageModal src={src} alt={alt} onClose={setShowModal.off} />
      )}
    </>
  );
};

export default WorkImage;
