import React from 'react'

interface Props {
    className? : string;
    type? : "submit" | "reset" | "button";
    label : string;

}

const GreenButton = ({className, type = "button", label} : Props) => {
  return (
    <button className={`w-full h-full px-2 py-1 font-medium rounded-lg cursor-pointer border border-teal-500  text-teal-500 transition-all duration-5 hover:bg-teal-500 hover:text-white ${className}`} type={type}>
        {label}
    </button>
  )
}

export default GreenButton