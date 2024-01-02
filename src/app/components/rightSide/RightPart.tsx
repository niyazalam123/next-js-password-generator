"use client";
import React, { useState } from 'react';
import PasswordLength from "@/app/components/rightSide/PasswordLength";
import CharacterUsed from "@/app/components/rightSide/CharacterUsed";
import PasswordShow from "@/app/components/rightSide/PasswordShow";

interface Props {
    passwordLength: number;
    setPasswordLength: React.Dispatch<React.SetStateAction<number>>
}
const RightPart: React.FC<Props> = ({ passwordLength, setPasswordLength }) => {
    const [password, setPassword] = useState<string>("dn7CEOJW1omadOKcJY12");
    const [capitalAlphbet, SetCapitalAlphbet] = useState<string>("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    const [smallAlphabet, SetSmallAlphabet] = useState<string>("abcdefghijklmnopqrstuvwxyz");
    const [digit, setDigit] = useState<string>("1234567890");
    const [specialCharc, setSpecialCharc] = useState<string>("@#$%^&*)({}~][?><");

    function passwordGenerator(number2: number) {
        const all_character = capitalAlphbet + smallAlphabet + digit + specialCharc;
        let newPassword = "";
        for (let i = 0; i < passwordLength; i++) {
            const randomIndex = Math.floor(Math.random() * all_character.length);
            newPassword = newPassword + all_character[randomIndex]
        }
        setPassword(newPassword);
    };

    return (
        <>
            <div className='_rght1'>
                <div className='_rght2'>
                    <PasswordShow 
                       passwordLength={passwordLength} 
                       password={password}
                       passwordGenerator = {passwordGenerator}
                    />
                    <PasswordLength 
                        passwordLength={passwordLength} 
                        setPasswordLength={setPasswordLength} 
                        passwordGenerator = {passwordGenerator}
                    />
                    <CharacterUsed />
                </div>
            </div>
        </>
    )
}

export default RightPart