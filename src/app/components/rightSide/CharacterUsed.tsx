import React, { useEffect, useState } from 'react'

interface Props{
    capital:boolean;
    small:boolean;
    digit:boolean;
    charc:boolean
}

interface PropsData {
    setConCgd:React.Dispatch<React.SetStateAction<Props>>;
    condChd:Props;
    passwordGenerator:(arg:number)=>void;
    passwordLength:number;
}
const CharacterUsed:React.FC<PropsData> = ({setConCgd,condChd,passwordGenerator,passwordLength}) => {
    
    useEffect(()=>{
        passwordGenerator(passwordLength)
    },[condChd])
    function characterSelect(e:any){
        const {name,checked} = e.target;
        setConCgd((prev):Props=>{
            return {
                ...prev,
                [name]:checked
            }
        })
    }
    return (
        <>
            <div className='_char1'>
                <div className='_char2'>
                    <div className='_char3'>
                        <h3>Character used : </h3>
                    </div>
                    <div className='_char4'>
                        <div className='_char5'>
                            <input 
                                type="checkbox" 
                                name="capital" 
                                id="one1" 
                                onChange={characterSelect} 
                                checked = {condChd.capital}
                            />
                            <label htmlFor="one1">ABC</label>
                        </div>
                        <div className='_char5'>
                            <input 
                                type="checkbox" 
                                name="small" 
                                id="one2" 
                                onChange={characterSelect} 
                                checked = {condChd.small}
                            />
                            <label htmlFor="one2">abc</label>
                        </div>
                        <div className='_char5'>
                            <input 
                                type="checkbox" 
                                name="digit" 
                                id="one3" 
                                onChange={characterSelect} 
                                checked = {condChd.digit}
                            />
                            <label htmlFor="one3">123</label>
                        </div>
                        <div className='_char5'>
                            <input 
                                type="checkbox" 
                                name="charc" 
                                id="one4" 
                                onChange={characterSelect} 
                                checked = {condChd.charc}
                            />
                            <label htmlFor="one4">#$&</label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CharacterUsed