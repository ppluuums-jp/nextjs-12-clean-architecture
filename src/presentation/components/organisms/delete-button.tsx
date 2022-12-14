import React from "react";
import { RoundButton } from "../molecules/round-button";
import { toastHandler } from "../molecules/toast";

export const DeleteButton = (): JSX.Element => {
  return (
    <RoundButton
      props={{
        width: "150px",
        height: "100px",
        colorScheme: "green",
        boxShadow: "",
        size: "md",
        variant: "solid",
        rounded: "md",
        text: "Delete",
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
