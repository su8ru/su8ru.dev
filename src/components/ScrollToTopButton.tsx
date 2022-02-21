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
          "radial(farthest-corner at 10px -5px, #c3839d 10%, #5a7bd5 60%)",
        color: "whiteAlpha.900",
      }}
    />
  );
};

export default ScrollToTopButton;
