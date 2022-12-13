import { Text } from "@chakra-ui/react";
import React from "react";

type Props = {
  fontFamily: string;
  fontSize: string;
  fontWeight: string;
  textAlign: "left" | "center" | "right";
  title: string;
};

export const Title = ({ props }: { props: Props }): JSX.Element => {
  return (
    <Text
      fontFamily={props.fontFamily}
      fontSize={props.fontSize}
      fontWeight={props.fontWeight}
      textAlign={props.textAlign}
    >
      {props.title}
    </Text>
  );
};
