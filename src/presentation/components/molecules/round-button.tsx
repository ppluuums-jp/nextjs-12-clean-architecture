import { Button, ButtonGroup } from "@chakra-ui/react";
import React from "react";

type Props = {
  colorScheme: string;
  size: "xs" | "sm" | "md" | "lg";
  variant: "solid" | "ghost" | "outline" | "link";
  rounded: "full";
  text: string;
  onClick?: (event: any) => void;
};

export const RoundButton = ({ props }: { props: Props }): JSX.Element => {
  const handleSubmit = (event: any) => {
    if (props.onClick) {
      props.onClick(event);
    }
  };
  return (
    <Button
      colorScheme={props.colorScheme}
      size={props.size}
      variant={props.variant}
      rounded={props.rounded}
      onClick={handleSubmit}
    >
      {props.text}
    </Button>
  );
};
