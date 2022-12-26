import React from "react";
import { useCrudController } from "../../hooks/crud-controller";
import { RoundButton } from "../molecules/round-button";
import { toastHandler } from "../molecules/toast";

export const CreateButton = (): JSX.Element => {
  const controller = useCrudController();
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
        onClick: async () => {
          const toastParams = await controller.createUser();
          toastHandler({
            props: {
              title: toastParams.title,
              description: toastParams.description,
              status: toastParams.status,
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
