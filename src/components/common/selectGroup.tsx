import React from 'react'

interface Props {
    label : string;
    value? : string;
    onChange? : () => void;
    options : OPT[];
}

interface OPT {
    value: string;
    label: string;
}

const SelectGroup = ({label, value, onChange, options} : Props) => {
  return (
    <div className='d-flex flex-col'>
        <label htmlFor="" className='font-display bold'>{label}</label>
        <select className='border rounded w-full py-1 px-2'  name="" id="">
            <option value="" selected disabled>{`Please select ${label}`}</option>
            {
                options.map((opt, index) => (
                    <option value={opt.value}>{opt.label}</option>
                ))
            }
        </select>
    </div>
  )
}

export default SelectGroup