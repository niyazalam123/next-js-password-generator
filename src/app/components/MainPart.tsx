"use client";
import React, { useState } from 'react';
import LeftPart from './LeftPart';
import RightPart from './rightSide/RightPart';

const MainPart = () => {
    const [passwordLength,setPasswordLength] = useState(8);
  return (
    <>
        <LeftPart  passwordLength={passwordLength} />
        <RightPart passwordLength={passwordLength} setPasswordLength={setPasswordLength} />
    </>
  )
}

export default MainPart