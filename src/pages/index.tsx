import type { NextPage } from "next";
import React from "react";
import { RecoilRoot } from "recoil";
import { CrudPage } from "../presentation/components/pages/crud-page";
import TopNavigation from "../presentation/components/pages/top-navigation";

const Home: NextPage = () => {
  return (
    <>
      <TopNavigation />
      <CrudPage />
    </>
  );
};

export default Home;
