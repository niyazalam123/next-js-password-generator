"use client";
import React,{useState} from 'react';
import PasswordLength from "@/app/components/rightSide/PasswordLength";
import CharacterUsed from "@/app/components/rightSide/CharacterUsed";
import PasswordShow from "@/app/components/rightSide/PasswordShow";

interface Props {
    passwordLength:number;
    setPasswordLength:React.Dispatch<React.SetStateAction<number>>
}
const RightPart:React.FC<Props> = ({passwordLength,setPasswordLength}) => {
    return (
        <>
            <div className='_rght1'>
                <div className='_rght2'>
                    <PasswordShow passwordLength={passwordLength}/>
                    <PasswordLength passwordLength={passwordLength} setPasswordLength={setPasswordLength} />
                    <CharacterUsed />
                </div>
            </div>
        </>
    )
}

export default RightPart