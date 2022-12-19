import React from "react";
import { useCrudController } from "../../controllers/crud-controller";
import { RoundButton } from "../molecules/round-button";
import { toastHandler } from "../molecules/toast";

export const UpdateButton = (): JSX.Element => {
  const controller = useCrudController();
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
        onClick: async () => {
          const status = await controller.updateUsers();
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
