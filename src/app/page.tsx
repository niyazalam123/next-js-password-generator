import React from "react"
import Header from "./components/Header";
import MainPart from "./components/MainPart";

export default function Home() {
  return (
    <>
      <div className="_Main1">
        <Header />
        <div className="_homepage">
          <MainPart />
        </div>
      </div>
    </>
  );
}
