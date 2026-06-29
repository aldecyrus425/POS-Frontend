import React from 'react'

interface Props {
  label: string;
  type?: string;
  value?: string;
  onChange?: () => void;
}

const CommonInputGroup = ({label, type = "text", value, onChange}: Props) => {
  return (
    <div className='d-flex flex-col'>
        <label htmlFor="" className='font-display bold'>{label}</label>
        <input className='border rounded w-full py-1 px-2' type={type} placeholder={`Please enter ${label.toLowerCase()}`} value={value} onChange={onChange}/>
    </div>
  )
}

export default CommonInputGroup