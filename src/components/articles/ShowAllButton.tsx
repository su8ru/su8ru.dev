import React from "react";
import { BsChevronUp, BsPlus } from "react-icons/bs";
import { Icon } from "@chakra-ui/icon";
import { Button } from "@chakra-ui/react";

export interface Props {
  onClick: () => void;
  showAll: boolean;
}

const ShowAllButton: React.VFC<Props> = ({ onClick, showAll }) => (
  <Button
    boxShadow="base"
    onClick={onClick}
    leftIcon={
      <Icon
        as={showAll ? BsChevronUp : BsPlus}
        fontSize={showAll ? "md" : "xl"}
      />
    }
  >
    {showAll ? "直近のみ表示" : "すべて表示"}
  </Button>
);

export default ShowAllButton;
