import React from "react";
import { useCrudController } from "../../controllers/crud-controller";
import { RoundButton } from "../molecules/round-button";
import { toastHandler } from "../molecules/toast";

export const DeleteButton = (): JSX.Element => {
  const controller = useCrudController();
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
        onClick: async () => {
          const status = await controller.deleteUsers();
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
