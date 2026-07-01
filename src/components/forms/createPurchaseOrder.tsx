import React from 'react'
import { MdArrowRight } from 'react-icons/md'
import CommonInputGroup from '../common/inputGroup'
import { FiPlus, FiTrash, FiTrash2 } from 'react-icons/fi'
import { PiBarcode, PiPlus } from 'react-icons/pi'
import { LuPhilippinePeso } from 'react-icons/lu'

const CreatePurchaseOrder = () => {
  return (
    <div className='w-full flex flex-col gap-3'>
      {/* Title/Location */}
      <div className='w-full flex justify-between'>
        <span className='font-display font-medium text-xl text-slate-800'>Purchase Order</span>
        <div className='flex items-center text-sm gap-2'>
          <a href="purchase-order" className='text-indigo-600'>Purchase Orders</a> <MdArrowRight /> <a href="#">Create Purchase Order</a>
        </div>
      </div>

      {/* Purchase Order Information */}
      <div className='bg-slate-50 w-full p-4 shadow rounded-lg border border-slate-300'>
        <span className='font-medium text-indigo-600 text-lg'>Purchase Order Information</span>
        <div className='grid grid-cols-3 gap-5 mt-2'>
          <CommonInputGroup label='First Name' />
          <CommonInputGroup label='First Name' />
          <CommonInputGroup label='First Name' />
          <CommonInputGroup label='First Name' />
        </div>
      </div>


      {/* Purchase Order Item */}
      <div className='bg-slate-50 w-full p-4 shadow rounded-lg border border-slate-300'>
        <div className='flex justify-between'>
          <span className='font-medium text-indigo-600 text-lg'>Purchase Order Items</span>
          <div className='flex gap-3'>
            <button className='cursor-pointer flex justify-center items-center w-40 gap-2 border border-indigo-600 text-indigo-600 rounded-lg py-1 font-semibold hover:bg-indigo-600 hover:text-white'><PiPlus /> Add Item</button>
            <button className='cursor-pointer flex justify-center items-center w-40 gap-2 border border-indigo-600 text-indigo-600 rounded-lg py-1 font-semibold hover:bg-indigo-600 hover:text-white'><PiBarcode /> Scan Barcode</button>
          </div>
        </div>
        <div className='p-2'>
          <table className='border-y mt-2 w-full text-sm'>
            <thead className='bg-slate-200 h-10'>
              <tr>
                <th className='items-center w-15'>#</th>
                <th className='text-start w-70'>Product</th>
                <th className='text-start w-70'>Description</th>
                <th className='text-start w-20'>Unit</th>
                <th className='text-start w-20'>Qty</th>
                <th className='text-start w-50'>Unit Cost</th>
                <th className='text-start w-30'>Discount (%)</th>
                <th className='items-center'>Total</th>
                <th className='items-center w-30'>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className='h-10'>
                <td className='text-center'>1</td>
                <td>
                  <input type="text" name="" id="" className='w-65 border border-slate-300 rounded-lg p-1' />
                </td>
                <td></td>
                <td><input type="text" name="" id="" className='border border-slate-300 rounded-lg p-1 w-15 focus:outline-none' /></td>
                <td><input type="text" name="" id="" className='border border-slate-300 rounded-lg p-1 w-15 focus:outline-none' /></td>
                <td className='h-full'><div className='w-min border border-slate-300 flex items-center rounded-lg'><div className='h-full w-10 bg-slate-400 py-2 flex items-center justify-center rounded-l-lg'><LuPhilippinePeso /></div><input type="text" name="" id="" className='w-35 px-2 focus:outline-none' /></div></td>
                <td><input type="text" name="" id="" className='w-25 border border-slate-300 rounded-lg p-1 focus:outline-none' /></td>
                <td className='text-center'>P 5,000.00</td>
                <td className='py-2 flex justify-center'>
                  <button className='border rounded-md border-red-400 text-red-400 p-1 cursor-pointer hover:bg-red-400 hover:text-white'>
                    <FiTrash2 size={15} />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <div className='flex w-full justify-between mt-2'>
            <button className='h-min flex gap-2 py-2 px-4 bg-blue-100 rounded-lg items-center font-medium text-sm text-indigo-500 cursor-pointer'>
              <FiTrash2 />
              Clear All
            </button>

            <div className='w-1/2 p-2 rounded-lg border border-slate-300 bg-slate-200 flex flex-col gap-3 text-sm font-medium'>
              
              <div className='w-full flex justify-between items-center'>
                <span>Subtotal</span>
                <span>P 9,650.00</span>
              </div>

              <div className='w-full flex justify-between items-center  '>
                <span>Discount (Overall)</span>
                <input type="text" className='border rounded-md bg-slate-50 border-slate-300 py-1 px-2'/>
                <span>P 0.00</span>
              </div>

              <div className='w-full flex justify-between items-center'>
                <span>Tax (12%)</span>
                <span>P 1,000.00</span>
              </div>

              <hr />

              <div className='w-full flex justify-between'>
                <span className='text-lg'>Total Amount</span>
                <span className='text-lg text-indigo-700'>P 10,808.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Buttons */}
    </div>
  )
}

export default CreatePurchaseOrder