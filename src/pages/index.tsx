import { Button, useToast } from "@chakra-ui/react";
import axios from "axios";
import type { NextPage } from "next";
import React from "react";

const Home: NextPage = () => {
  const toast = useToast();
  const insertUser = async () => {
    // const res = await axios.get("/api/user");
    toast({
      title: "User created.",
      description: "We've created your user for you.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    // console.log(res);
  };

  return (
    <Button colorScheme="blue" onClick={() => insertUser()}>
      Insert User
    </Button>
  );
};

export default Home;
