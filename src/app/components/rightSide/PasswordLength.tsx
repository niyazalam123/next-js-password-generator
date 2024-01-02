"use client";
import React, { useState } from 'react';
import { LuRefreshCcw } from "react-icons/lu";

interface Props {
    passwordLength:number;
    setPasswordLength:React.Dispatch<React.SetStateAction<number>>;
    passwordGenerator:(arg:number)=>void;
}

const PasswordLength:React.FC<Props> = ({passwordLength,setPasswordLength,passwordGenerator}) => {
    const [rotate,setRotate] = useState<number>(1);
    const [count,setCount] = useState(1);

    function passwordDecrease(){
        if (passwordLength>1){
            setPasswordLength((prev:number)=>prev-1)
        }
    }

    function passwordIncrease(){
        if (passwordLength<20){
            setPasswordLength((prev:number)=>prev+1)
        }
    }

    function createNewPassword(){
        passwordGenerator(passwordLength);
        setCount(count+1)
        setRotate(count*360);
    }
    return (
        <>
            <div className='_passwordl1'>
                <div className='_passwordl2'>
                    <div className='_passwordl3'>
                        <h3>Password Length : <span className='_passwordl4'>{passwordLength}</span></h3>
                    </div>
                    <div className='_passwordl6'>
                        <button className='_passwordl5' title ="Decrease the password length" onClick={passwordDecrease}>
                            <span>-</span>
                        </button>
                        <button className='_passwordl5 _passwordl50 ' title ="Refresh the page" onClick = {createNewPassword}>
                            <span style={{ transform: `rotate(-${rotate}deg)`}}><LuRefreshCcw /></span>
                        </button>
                        <button className='_passwordl5' title ="Increase the password length" onClick={passwordIncrease}>
                            <span>+</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PasswordLength