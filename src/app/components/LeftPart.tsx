"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface Props {
    passwordLength:number;
}

const LeftPart:React.FC<Props> = ({passwordLength}) => {
    const [image,setImage] = useState<string>("/image/weak.svg");

    useEffect(() => {
        if (passwordLength < 6 && passwordLength >= 1) {
            setImage("/image/very-weak.svg")
        }
        else if (passwordLength < 9 && passwordLength >= 6) {
            setImage("/image/weak.svg")
        }
        else if (passwordLength < 14 && passwordLength >= 9) {
            setImage("/image/good.svg")
        }
        else if (passwordLength < 17 && passwordLength >= 14) {
            setImage("/image/strong.svg")
        }
        else if (passwordLength <= 20 && passwordLength >= 17) {
            setImage("/image/very-strong.svg")
        }
    },[passwordLength]);
    return (
        <>
            <div className='-left1'>
                <div className='-left2'>
                    <Image
                        src={image}
                        width={320}
                        height={260}
                        alt="password length is good"
                    />
                </div>
            </div>
        </>
    )
}

export default LeftPart