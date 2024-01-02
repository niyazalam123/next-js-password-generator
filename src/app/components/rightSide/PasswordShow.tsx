"use client";
import React, { useEffect, useState } from 'react';
import { FaRegCopy } from "react-icons/fa";

interface Props {
    passwordLength: number;
}

const PasswordShow: React.FC<Props> = ({ passwordLength }) => {

    const [capitalAlphbet, SetCapitalAlphbet] = useState<string>("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    const [smallAlphabet, SetSmallAlphabet] = useState<string>("abcdefghijklmnopqrstuvwxyz");
    const [digit, setDigit] = useState<string>("1234567890");
    const [specialCharc, setSpecialCharc] = useState<string>("@#$%^&*)({}~][?><");
    const [length2, setLength2] = useState("Weak");
    const [backgroundColor2,setBackgroundColor2] = useState("yellow");

    useEffect(() => {
        if (passwordLength < 6 && passwordLength >= 1) {
            setLength2("Very Weak");
            setBackgroundColor2("red");
        }
        else if (passwordLength < 9 && passwordLength >= 6) {
            setLength2("Weak");
            setBackgroundColor2("yellow");
        }
        else if (passwordLength < 14 && passwordLength >= 9) {
            setLength2("Good");
            setBackgroundColor2("purple");
        }
        else if (passwordLength < 17 && passwordLength >= 14) {
            setLength2("Strong");
            setBackgroundColor2("blue");
        }
        else if (passwordLength <= 20 && passwordLength >= 17) {
            setLength2("Very Strong");
            setBackgroundColor2("green")
        }
    },[passwordLength]);

    // function passwordGenerate(password:number){
        
    // }

    return (
        <>
            <div className='_Password1'>
                <div className='_Password2'>
                    <div className='_Password3'>
                        <span>dn7CEOJW1omadOKcJY12</span>
                    </div>
                    <div className='_Password4'>
                        <div className='_Password5' style = {{backgroundColor:`${backgroundColor2}`}}>
                            <span>{length2}</span>
                        </div>
                        <div className='_Password6'>
                            <button title="Copy the password">
                                <span><FaRegCopy /></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PasswordShow