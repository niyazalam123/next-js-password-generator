"use client";
import React,{useState} from 'react';
import PasswordLength from "@/app/components/rightSide/PasswordLength";
import CharacterUsed from "@/app/components/rightSide/CharacterUsed";
import PasswordShow from "@/app/components/rightSide/PasswordShow";

const RightPart = () => {
    const [passwordLength,setPasswordLength] = useState(8);

    return (
        <>
            <div className='_rght1'>
                <div className='_rght2'>
                    <PasswordShow passwordLength={passwordLength}/>
                    <PasswordLength passwordLength={passwordLength}/>
                    <CharacterUsed />
                </div>
            </div>
        </>
    )
}

export default RightPart