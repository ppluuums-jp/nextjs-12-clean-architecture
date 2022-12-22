import { Box, Spacer, Center, VStack, Container } from "@chakra-ui/react";
import React from "react";
import { Title } from "../molecules/title";
import { CrudButton } from "../organisms/crud-button";

export const CrudPage = (): JSX.Element => {
  return (
    <>
      <Box>
        <Container my={10}>
          <Title
            props={{
              id: "crud-page",
              title: "CRUD PAGE",
            }}
          ></Title>
        </Container>
        <Center h={"70vh"}>
          <VStack direction={"column"}>
            <CrudButton />
          </VStack>
        </Center>
      </Box>
    </>
  );
};
