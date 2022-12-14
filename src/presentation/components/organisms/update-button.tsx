import React from "react";
import { RoundButton } from "../molecules/round-button";
import { toastHandler } from "../molecules/toast";

export const UpdateButton = (): JSX.Element => {
  return (
    <RoundButton
      props={{
        width: "150px",
        height: "100px",
        colorScheme: "yellow",
        boxShadow: "",
        size: "md",
        variant: "solid",
        rounded: "md",
        text: "Update",
        onClick: () =>
          toastHandler({
            props: {
              title: "Button clicked.",
              description: "We are gonna write description here",
              status: "success",
              position: "top",
              duration: 5000,
              isClosable: true,
            },
          }),
      }}
    ></RoundButton>
  );
};
