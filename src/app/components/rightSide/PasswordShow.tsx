"use client";
import React, { useEffect, useState } from 'react';
import { FaRegCopy } from "react-icons/fa";
import PasswordLength from './PasswordLength';

interface Props {
    passwordLength: number;
    password:string;
    passwordGenerator:(arg2: number) => void;
}

const PasswordShow: React.FC<Props> = ({ passwordLength,passwordGenerator,password }) => {
    const [length2, setLength2] = useState<string>("Weak");
    const [backgroundColor2, setBackgroundColor2] = useState<string>("yellow");
    const [showCopyBtn, setShowCopyBtn] = useState<boolean>(false);

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
            setBackgroundColor2("green");
        }
    }, [passwordLength]);

    async function passwordCopy() {
        try {
            await navigator.clipboard.writeText(password);
            setShowCopyBtn(true);
            setTimeout(() => {
                setShowCopyBtn(false);
            }, 1500)
        } catch (error) {
            alert('Copying to clipboard failed. Please try manually.' +  error);
        }
    }

    useEffect(()=>{
        passwordGenerator(passwordLength);
    }, [passwordLength]);

   

    return (
        <>
            <div className='_Password1'>
                <div className='_Password2'>
                    <div className='_Password3'>
                        <span>{password}</span>
                    </div>
                    <div className='_Password4'>
                        <div className='_Password5' style={{ backgroundColor: `${backgroundColor2}` }}>
                            <span>{length2}</span>
                        </div>
                        <div className='_Password6'>
                            <div className={`_Password9 ${showCopyBtn ? "_Password9Show" : ""}`}>
                                <h4>Copied</h4>
                                <span className='_Password10'></span>
                            </div>
                            <button title="Copy the password" onClick={passwordCopy}>
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