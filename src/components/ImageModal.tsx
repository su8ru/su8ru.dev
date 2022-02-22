import React from "react";
import { Center, Image, ScaleFade, useColorModeValue } from "@chakra-ui/react";
import ModalPortal from "components/ModalPortal";

export interface ImageModalProps {
  src: string;
  alt: string;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ src, alt, onClose }) => {
  const backgroundColor = useColorModeValue("whiteAlpha.500", "blackAlpha.500");

  return (
    <ModalPortal>
      <Center
        position="fixed"
        zIndex="modal"
        top="0"
        right="0"
        bottom="0"
        left="0"
        cursor="zoom-out"
        sx={{ backgroundColor, backdropFilter: "blur(2px)" }}
        onClick={onClose}
      >
        <ScaleFade initialScale={0.8} in={true}>
          <Image src={src} alt={alt} maxH="var(--100vh)" />
        </ScaleFade>
      </Center>
    </ModalPortal>
  );
};

export default ImageModal;
