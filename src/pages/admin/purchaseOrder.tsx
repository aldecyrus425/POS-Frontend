import React from 'react'
import { MdArrowRight } from 'react-icons/md'
import CommonInputGroup from '../../components/common/inputGroup'

const PurchaseOrder = () => {
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
      <div className='bg-slate-50 w-full p-4 shadow rounded-lg border border-slate-300 grid grid-cols-3 gap-5'>
        <CommonInputGroup label='First Name' />
        <CommonInputGroup label='First Name' />
        <CommonInputGroup label='First Name' />
        <CommonInputGroup label='First Name' />

      </div>


      {/* Purchase Order Item */}

      {/* Buttons */}
    </div>
  )
}

export default PurchaseOrder