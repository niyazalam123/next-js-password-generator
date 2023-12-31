"use client";
import React, { useState } from 'react';
import { LuRefreshCcw } from "react-icons/lu";

interface Props {
    passwordLength:number;
}

const PasswordLength:React.FC<Props> = ({passwordLength}) => {
    return (
        <>
            <div className='_passwordl1'>
                <div className='_passwordl2'>
                    <div className='_passwordl3'>
                        <h3>Password Length : <span className='_passwordl4'>{passwordLength}</span></h3>
                    </div>
                    <div className='_passwordl6'>
                        <button className='_passwordl5' title ="Decrease the password length">
                            <span>-</span>
                        </button>
                        <button className='_passwordl5 _passwordl50 ' title ="Refresh the page">
                            <span><LuRefreshCcw /></span>
                        </button>
                        <button className='_passwordl5' title ="Increase the password length">
                            <span>+</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PasswordLength