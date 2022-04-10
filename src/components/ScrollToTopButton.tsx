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
    />
  );
};

export default ScrollToTopButton;
