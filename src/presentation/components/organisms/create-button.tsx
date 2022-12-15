import React from "react";
import { useRecoilState } from "recoil";
import { createState } from "../../state/atoms/create";
import { RoundButton } from "../molecules/round-button";
import { toastHandler } from "../molecules/toast";

export const CreateButton = (): JSX.Element => {
  const [toastState, setToastState] = useRecoilState(createState);
  const updateToastState = () => {
    setToastState("error");
  };
  return (
    <RoundButton
      props={{
        width: "150px",
        height: "100px",
        colorScheme: "blue",
        boxShadow: "",
        size: "md",
        variant: "solid",
        rounded: "md",
        text: "Create",
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
          }),
            updateToastState();
        },
      }}
    ></RoundButton>
  );
};
