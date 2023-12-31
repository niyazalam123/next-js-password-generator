import React from 'react';
import { FaRegCopy } from "react-icons/fa";

const PasswordShow = () => {
    return (
        <>
            <div className='_Password1'>
                <div className='_Password2'>
                    <div className='_Password3'>
                        <span>dn7CEOJW1omadOKcJY12</span>
                    </div>
                    <div className='_Password4'>
                        <div className='_Password5'>
                            <span>Very Strong</span>
                        </div>
                        <div className='_Password6'>
                            <button title ="Copy the password">
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