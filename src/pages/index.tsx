import type { NextPage } from "next";
import React from "react";
import { RecoilRoot } from "recoil";
import { CrudPage } from "../presentation/components/pages/crud-page";

const Home: NextPage = () => {
  return <CrudPage />;
};

export default Home;
