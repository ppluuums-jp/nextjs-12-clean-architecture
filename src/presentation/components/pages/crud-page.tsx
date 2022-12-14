import { Box, Spacer, Center, VStack } from "@chakra-ui/react";
import React from "react";
import { Title } from "../molecules/title";
import { CrudButton } from "../organisms/crud-button";

export const CrudPage = (): JSX.Element => {
  return (
    <>
      <Box h={"100vh"}>
        <Title
          props={{
            title: "CRUD PAGE",
          }}
        ></Title>
        <Center h={"90vh"}>
          <VStack direction={"column"}>
            <CrudButton />
          </VStack>
        </Center>
      </Box>
    </>
  );
};
