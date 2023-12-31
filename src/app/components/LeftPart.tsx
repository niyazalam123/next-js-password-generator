import React from 'react';
import Image from 'next/image';

const LeftPart = () => {
    return (
        <>
            <div className='-left1'>
                <div className='-left2'>
                    <Image
                        src="/image/good.svg"
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