import React from "react";
import { BsArrowUp } from "react-icons/bs";
import { IconButton } from "@chakra-ui/react";

const ScrollToTopButton: React.VFC = () => {
  const scrollToTop = () => {
    window.scroll({ top: 0, behavior: "smooth" });
  };

  return (
    <IconButton
      aria-label="Scroll to Top"
      icon={<BsArrowUp />}
      onClick={scrollToTop}
      boxShadow="sm"
      colorScheme="gray"
      _hover={{
        bgGradient:
          "radial(circle farthest-corner at 20px 35px, #87b0c4 10%, #7d8fb8 40%, #8b7993 80%)",
        color: "whiteAlpha.900",
      }}
    />
  );
};

export default ScrollToTopButton;
