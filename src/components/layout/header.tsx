import React, { type ReactElement } from 'react'
import { LuBell, LuMenu } from 'react-icons/lu'
import profile from '../../assets/profile.avif'
import { MdOutlineArrowDropDown } from 'react-icons/md'
import { Outlet } from 'react-router-dom'

interface Props {
  children : ReactElement;
}

const Header = ({children} : Props) => {
  return (
    <div className='w-full h-full flex flex-col'>
      <div className='w-full bg-slate-50 h-12 flex justify-between items-center px-2 border-b border-slate-300'>
        <LuMenu size={30} className='cursor-pointer h-full' />
        <div className='flex items-center gap-3'>
          <LuBell size={18} />
          <div className='flex items-center gap-3'>
            <img src={profile} alt="" className='h-8 aspect-square rounded-full' />
            <div className='flex flex-col'>
              <span className='font-semibold leading-tight'>Full namedwadsadw</span>
              <span className='text-slate-500 text-sm font-medium leading-tight'>Position</span>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full h-full  overflow-hidden'>
        {children}
      </div>
    </div>
  )
}

export default Header