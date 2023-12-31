import React from 'react';
import PasswordLength from "@/app/components/rightSide/PasswordLength";
import CharacterUsed from "@/app/components/rightSide/CharacterUsed";
import PasswordShow from "@/app/components/rightSide/PasswordShow";

const RightPart = () => {
    return (
        <>
            <div className='_rght1'>
                <div className='_rght2'>
                    <PasswordShow />
                    <PasswordLength />
                    <CharacterUsed />
                </div>
            </div>
        </>
    )
}

export default RightPart