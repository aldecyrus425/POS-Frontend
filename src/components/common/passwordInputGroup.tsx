import React, { useState } from 'react'
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';

interface Props {
    label: string;
    onChange?: () => void;
}

const PasswordInputGroup = ({ label, onChange}: Props) => {
    
    const [isVisible, setPassword] = useState(false);

    return (
        <div className='d-flex flex-col'>
            <label htmlFor="" className='font-display bold'>{label}</label>
            <div className="w-full flex flex-row gap-2">
                <input
                    type={!isVisible ? 'password' : 'text'}
                    className="border rounded w-full py-1 px-2"
                    placeholder={`Please enter ${label.toLowerCase()}`}
                    onChange={onChange}
                />

                <div className="flex items-center justify-center cursor-pointer">
                    {!isVisible ? <BsEyeFill size={22} onClick={() => setPassword(true)}/> : <BsEyeSlashFill size={22} onClick={() => setPassword(false)}/>}
                </div>
            </div>
        </div>
    )
}

export default PasswordInputGroup