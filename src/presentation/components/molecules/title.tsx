import { Text } from "@chakra-ui/react";
import React from "react";

type Props = {
  id: string;
  textAlign?: "left" | "center" | "right";
  title: string;
};

export const Title = ({ props }: { props: Props }): JSX.Element => {
  return (
    <Text
      id={props.id}
      fontSize={"4xl"}
      fontWeight={"bold"}
      textAlign={props.textAlign ?? "center"}
    >
      {props.title}
    </Text>
  );
};

Title.defaultProps = {
  title: "",
};
