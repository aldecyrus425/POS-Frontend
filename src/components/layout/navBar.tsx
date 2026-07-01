import React, { Children, useState } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { BsPersonDown, BsPersonUp } from 'react-icons/bs'
import { FaRegUser, FaShoppingBasket } from 'react-icons/fa'
import { GrDashboard } from 'react-icons/gr'
import { HiMiniCog6Tooth } from 'react-icons/hi2'
import { LuBox, LuClipboardList } from 'react-icons/lu'
import { MdOutlineAnalytics, MdOutlineArrowDropDown } from 'react-icons/md'

const navItems = [
    { label: "Dashboard", icon: GrDashboard, path : "dashboard"},
    { label: "Products", icon: LuBox, path : "products"},
    { label: "Inventory", icon: LuClipboardList, children: [] },
    { label: "Sales", icon: AiOutlineShoppingCart, children: [] },
    { label: "Purchases", icon: FaShoppingBasket, children: [
        {label: "Purchase Order", path: "purchase-order"}, 
        {label : "Stock In", path: "stock-in"}
    ] },
    { label: "Supplier", icon: BsPersonUp, path : "supplier" },
    { label: "Customer", icon: BsPersonDown, path : "customer" },
    { label: "Report", icon: MdOutlineAnalytics, path : "report" },
    { label: "Users", icon: FaRegUser, path : "users" },
    { label: "Settings", icon: HiMiniCog6Tooth, path : "settings" }

]

const NavBar = () => {
    const [openMenu, setOpenMenu] = useState("");
    return (
        <div className='w-60 bg-slate-50 border-r border-slate-300 flex flex-col gap-2'>
            <div className='h-12 w-full flex justify-center items-center border-slate-300'>
                <span className='font-bold text-shadow-black'></span>
            </div>

            <div className='w-full h-full flex flex-col gap-5'>

                {navItems.map((item, index) => {
                    const isOpen = openMenu === item.label;
                    const hasChildren = !!item.children;
                    return (
                        <div>
                            <a href={item.path} key={index} className='flex gap-5 px-5 items-center cursor-pointer text-slate-800'>
                                <item.icon size={20} />
                                <span className='font-medium text-md'>{item.label}</span>
                                {hasChildren && (<MdOutlineArrowDropDown className={`ml-auto w-10 h-5 transition-transform duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'}`} onClick={() => hasChildren && setOpenMenu(isOpen ? '' : item.label)}/>)}
                            </a>
                            {hasChildren && isOpen && (
                                <div className='flex flex-col mt-2 gap-1'>
                                    {item.children.map((child, index) => (
                                        <a href={child.path} key={index} className='font-medium h-9 flex items-center pl-15 pr-4 text-sm text-slate-800 hover:bg-indigo-50 hover:text-indigo-600'>{child.label}</a>
                                    ))}
                                </div>
                            )}
                        </div>

                    )
                })}


            </div>
        </div>
    )
}

export default NavBar