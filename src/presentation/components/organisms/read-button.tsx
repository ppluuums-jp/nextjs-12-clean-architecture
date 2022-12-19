import React from "react";
import { useRecoilValue } from "recoil";
import { useCrudController } from "../../controllers/crud-controller";
import { readState } from "../../state/atoms/read";
import { RoundButton } from "../molecules/round-button";
import { toastHandler } from "../molecules/toast";

export const ReadButton = (): JSX.Element => {
  const controller = useCrudController();
  const toastState = useRecoilValue(readState);
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
        onClick: async () => {
          const status = await controller.readUsers();
          toastHandler({
            props: {
              title: "Button clicked.",
              description: "We are gonna write description here",
              status: status,
              position: "top",
              duration: 5000,
              isClosable: true,
            },
          });
        },
      }}
    ></RoundButton>
  );
};
