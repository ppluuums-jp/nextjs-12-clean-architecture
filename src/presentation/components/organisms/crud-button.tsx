import { ButtonGroup, Center, VStack } from "@chakra-ui/react";
import React from "react";
import { CreateButton } from "./create-button";
import { DeleteButton } from "./delete-button";
import { ReadButton } from "./read-button";
import { UpdateButton } from "./update-button";

export const CrudButton = (): JSX.Element => {
  return (
    <>
      <Center alignItems={"center"} justifyItems={"center"} h={"auto"}>
        <VStack spacing={4} direction={"column"}>
          <VStack spacing={4} direction={"row"}>
            <ButtonGroup>
              <CreateButton />
              <ReadButton />
            </ButtonGroup>
          </VStack>
          <VStack spacing={4} direction={"row"}>
            <ButtonGroup>
              <UpdateButton />
              <DeleteButton />
            </ButtonGroup>
          </VStack>
        </VStack>
      </Center>
    </>
  );
};
