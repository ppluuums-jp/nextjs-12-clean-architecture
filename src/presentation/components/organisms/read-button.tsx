import React from "react";
import { ReadAllUserController } from "../../controllers/crud-controller";
import { RoundButton } from "../molecules/round-button";
import { toastHandler } from "../molecules/toast";

export const ReadButton = (): JSX.Element => {
  const [toastState, stateHandler] = ReadAllUserController();
  return (
    <RoundButton
      props={{
        width: "150px",
        height: "100px",
        colorScheme: "red",
        boxShadow: "",
        size: "md",
        variant: "solid",
        rounded: "md",
        text: "Read",
        onClick: () => {
          toastHandler({
            props: {
              title: "Button clicked.",
              description: "We are gonna write description here",
              status: toastState,
              position: "top",
              duration: 5000,
              isClosable: true,
            },
          });
          stateHandler();
        },
      }}
    ></RoundButton>
  );
};
