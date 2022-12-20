import type { NextPage } from "next";
import React from "react";
import { RecoilRoot } from "recoil";
import { Observable, Subscriber } from "rxjs";
import { CrudPage } from "../presentation/components/pages/crud-page";

const Home: NextPage = () => {
  // RxJSのサンプル
  getNumber().subscribe((v) => {
    console.log(v);
  });

  return (
    <RecoilRoot>
      <CrudPage />
    </RecoilRoot>
  );
};

export default Home;

function getNumber(): Observable<number> {
  const obs = new Observable((sub: Subscriber<number>) => {
    let i = 0;
    setInterval(() => sub.next(i++), 1000);
  });
  return obs;
}
