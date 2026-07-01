import React from 'react'
import { BsCart4 } from 'react-icons/bs'
import { LuBox, LuUserRound, LuUsersRound } from 'react-icons/lu'
import { PiShoppingCart, PiWarningCircle } from 'react-icons/pi'
import { RiArrowDropDownLine, RiShoppingBag3Line } from 'react-icons/ri'
import coke from '../../assets/coke.jpg'
import { IoPersonOutline } from 'react-icons/io5'
import { HiOutlineTag, HiOutlineTruck } from 'react-icons/hi2'
import { MdVerified } from 'react-icons/md'

const dashboardCards = [
  { label: "Total Sales", icon: BsCart4, value: "P 123,430.00", bgcolor: "bg-blue-700" },
  { label: "Total Orders", icon: RiShoppingBag3Line, value: "215", bgcolor: "bg-green-700" },
  { label: "Total Profit", icon: LuBox, value: "P 20,650.00", bgcolor: "bg-purple-700" },
  { label: "Low Stock Items", icon: PiShoppingCart, value: "18", bgcolor: "bg-orange-700" },
  { label: "Out of Stock", icon: PiWarningCircle, value: "5", bgcolor: "bg-pink-700" }
]

const lowerCards = [
  { label: "Total Customers", icon: IoPersonOutline, value: "250" },
  { label: "Total Supplier", icon: HiOutlineTruck, value: "25" },
  { label: "Total Products", icon: LuBox, value: "1,250" },
  { label: "Total Categories", icon: HiOutlineTag, value: "20" },
  { label: "Total Users", icon: LuUsersRound, value: "15" },
  { label: "Active Users", icon: LuUserRound, value: "8" },
  { label: "System Status", icon: MdVerified, value: "Operational", textColor: "text-green-500" },

]

const AdminDashboard = () => {
  return (
    <div className='w-full flex flex-col gap-3'>
      <span className='font-display font-medium text-xl'>Dashboard</span>
      <div className='grid grid-cols-5 gap-2'>
        {dashboardCards.map((item, index) => (
          <div key={index} className='w-full border border-slate-100 flex bg-slate-50 shadow-lg p-4 rounded-lg gap-5'>
            <div className={`rounded-xl flex justify-center items-center aspect-square ${item.bgcolor}`}>
              <item.icon className='text-white text-3xl' />
            </div>
            <div className='flex flex-col gap-3'>
              <span className='text-md font-medium'>{item.label}</span>
              <span className={`font-extrabold text-xl`}>{item.value}</span>
            </div>

          </div>
        ))}

      </div>
      <div className='w-full grid grid-cols-3 gap-5'>
        {/* Card 1 */}
        <div className='w-full border border-slate-100 shadow-lg p-4 bg-slate-50 rounded-xl flex flex-col gap-4'>
          <div className='flex justify-between'>
            <span className='text-md font-medium flex items-center'>Sales Overview</span>
            <div className='w-35 flex justify-between py-1 px-4 gap-1 border border-slate-100 rounded-lg shadow-lg items-center cursor-pointer'>
              <span className='font-medium text-sm'>This Week</span>
              <RiArrowDropDownLine size={22} />
            </div>
          </div>
          <div className='w-full h-70 rounded-lg bg-slate-200'>

          </div>
        </div>

        {/* Card 2 */}
        <div className='w-full border border-slate-100 shadow-lg p-4 bg-slate-50 rounded-xl flex flex-col gap-4'>
          <span className='text-md font-medium'>Sales by Payment Method</span>
          <div className='w-full h-70 rounded-lg bg-slate-200'>

          </div>
        </div>

        {/* Card 3 */}
        <div className='w-full border border-slate-100 shadow-lg p-4 bg-slate-50 rounded-xl flex flex-col gap-4'>
          <div className='flex justify-between'>
            <span className='text-md font-medium'>Sales Overview</span>
            <a className='font-bold text-indigo-700 text-sm cursor-pointer'>View all</a>
          </div>
          <div className='w-full h-70 rounded-lg'>
            <table className='w-full font-medium'>
              <tbody>
                <tr>
                  <td className='w-15 text-center text-lg'>1</td>
                  <td className='w-10'><img src={coke} alt="" className='object-fill w-10' /></td>
                  <td className='pl-10 text-start text-lg'>Coke 1.5L</td>
                  <td className='font-medium text-lg'>255</td>
                </tr>
                <tr>
                  <td className='w-15 text-center text-lg'>1</td>
                  <td className='w-10'><img src={coke} alt="" className='object-fill w-10' /></td>
                  <td className='pl-10 text-start text-lg'>Coke 1.5L</td>
                  <td className='font-medium text-lg'>255</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className='w-full bg-slate-100 border border-slate-200 shadow-xl rounded-xl grid grid-cols-7'>
        {lowerCards.map((item, index) => (
          <div key={index} className={`flex gap-5 p-4 w-full rounded-l-xl  border-slate-200 ${index !== lowerCards.length - 1 ? "border-r" : ""}`}>
            <item.icon className={`h-full w-8 ${item.textColor}`} />
            <div className='flex flex-col gap-2'>
              <span className='leading-tight text-xs font-medium'>{item.label}</span>
              <span className={`leading-tight font-bold ${item.textColor}`}>{item.value}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AdminDashboard