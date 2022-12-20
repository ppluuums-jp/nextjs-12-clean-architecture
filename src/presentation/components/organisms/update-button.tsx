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
          const toastParams = await controller.updateUsers();
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
