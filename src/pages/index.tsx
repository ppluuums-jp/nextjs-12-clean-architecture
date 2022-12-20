import { useToast } from "@chakra-ui/react";
import type { NextPage } from "next";
import React from "react";
import { RecoilRoot } from "recoil";
import { CrudPage } from "../presentation/components/pages/crud-page";

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
    <RecoilRoot>
      <CrudPage />
    </RecoilRoot>
  );
};

export default Home;
