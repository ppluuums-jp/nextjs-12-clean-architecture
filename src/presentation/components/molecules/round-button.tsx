import { Box, Button, ButtonGroup } from "@chakra-ui/react";
import React from "react";

type Props = {
  width: string;
  height: string;
  colorScheme: "blue" | "red" | "yellow" | "green";
  boxShadow: string;
  size: "xs" | "sm" | "md" | "lg";
  variant: "solid" | "ghost" | "outline" | "link";
  rounded: "md";
  text: string;
  onClick?: () => void;
};

export const RoundButton = ({ props }: { props: Props }): JSX.Element => {
  return (
    <Button
      width={props.width}
      height={props.height}
      colorScheme={props.colorScheme}
      _hover={{ _disabled: { gb: props.boxShadow } }}
      size={props.size}
      variant={props.variant}
      rounded={props.rounded}
      onClick={props.onClick}
    >
      {props.text}
    </Button>
  );
};

RoundButton.defaultProps = {
  width: "150px",
  height: "100px",
  colorScheme: "blue",
  boxShadow: "initial",
  size: "md",
  variant: "solid",
  rounded: "md",
  text: "RoundButton",
  onClick: () => {},
};
