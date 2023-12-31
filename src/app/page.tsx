import React from "react"
import Header from "./components/Header";
import RightPart from "@/app/components/rightSide/RightPart"
import LeftPart from "@/app/components/LeftPart"

export default function Home() {
  return (
    <>
      <div className="_Main1">
        <Header />
        <div className="_homepage">
          <LeftPart />
          <RightPart />
        </div>
      </div>
    </>
  );
}
