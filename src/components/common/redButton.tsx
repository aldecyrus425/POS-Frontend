import React from 'react'

interface Props {
    className? : string;
    type? : "submit" | "reset" | "button";
    label : string;
    onClose?: () => void;
}

const RedButton = ({className, type = "button", label, onClose} : Props) => {
  return (
    <button className={`w-full h-full px-2 py-1 font-medium rounded-lg cursor-pointer border border-rose-500  text-rose-500 transition-all duration-5 hover:bg-rose-500 hover:text-white ${className}`} type={type}>
        {label}
    </button>
  )
}

export default RedButton