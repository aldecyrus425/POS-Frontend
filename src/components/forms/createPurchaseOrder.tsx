import React from 'react'
import { BiMinus, BiPlus, BiSearch } from 'react-icons/bi'
import GreenButton from '../common/greenButton'
import CommonInputGroup from '../common/inputGroup'

const CreatePurchaseOrder = () => {
    return (
        <div className='w-screen h-screen'>
            <div className='w-full h-full bg-slate-200 flex flex-col gap-2 relative'>
                <div className='p-2'>
                    <span className='font-medium text-lg'>Supplier Information</span>
                    <div className="w-full h-10 flex gap-2">
                        <div className="relative w-full">
                            <div className="bg-white h-10 rounded-lg flex items-center gap-2 px-2">
                                <BiSearch size={22} />
                                <input
                                    type="text"
                                    placeholder="Please enter to search supplier"
                                    className="w-full focus:outline-none font-medium"
                                />
                            </div>

                            {/* <div className="absolute left-0 top-full mt-1 w-full bg-white rounded-lg shadow-lg z-10 font-medium text-slate-700 flex flex-col gap-2 p-2">
                            <div className='cursor-pointer' onClick={() => console.log()}>
                                Search Result
                            </div>
                            
                        </div> */}
                        </div>

                        <div className="w-80">
                            <GreenButton label="Add Supplier" />
                        </div>
                    </div>
                    <div className='grid grid-cols-2 gap-x-3 gap-y-1'>
                        <CommonInputGroup disabled label='Supplier Name' />
                        <CommonInputGroup disabled label='Email' />
                        <CommonInputGroup disabled label='Contact Number' />
                        <CommonInputGroup disabled label='Address' />
                    </div>
                </div>
                <hr className='border-slate-400 mt-4 p-2' />
                <div className='p-2'>
                    <span className='font-medium text-lg'>List of Products</span>
                    <div className="w-full h-10 flex gap-2">
                        <div className="relative w-full">
                            <div className="bg-white h-10 rounded-lg flex items-center gap-2 px-2">
                                <BiSearch size={22} />
                                <input
                                    type="text"
                                    placeholder="Please enter to search products"
                                    className="w-full focus:outline-none font-medium"
                                />
                            </div>

                            {/* <div className="absolute left-0 top-full mt-1 w-full bg-white rounded-lg shadow-lg z-10 font-medium text-slate-700 flex flex-col gap-2 p-2">
                            <div className='cursor-pointer' onClick={() => console.log()}>
                                Search Result
                            </div>
                            
                        </div> */}
                        </div>

                        <div className="w-80">
                            <GreenButton label="Add Products" />
                        </div>
                    </div>
                    <div className='flex gap-2 flex-col mt-2'>
                        <div className='flex gap-2 w-full bg-slate-50 items-center rounded-md'>
                            {/* Product Name */}
                            <div className='w-full px-5 font-medium'>
                                <span>Product 1</span>
                            </div>
                            {/* Actions */}
                            <div className='w-100 flex gap-5 items-center justify-center h-10'>
                                <span className='font-medium text-blue-500 w-40'>P 1,500</span>
                                <div className='w-40 flex gap-5 items-center justify-center'>
                                    <div className='bg-teal-200 rounded-full cursor-pointer'>
                                        <BiPlus size={22} className='text-white' />
                                    </div>
                                    <span className='font-medium text-xl text-slate-700'>00</span>
                                    <div className='bg-pink-500 rounded-full cursor-pointer'>
                                        <BiMinus size={22} className='text-white' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-2 w-full bg-slate-50 items-center rounded-md'>
                            {/* Product Name */}
                            <div className='w-full px-5 font-medium'>
                                <span>Product 1</span>
                            </div>
                            {/* Actions */}
                            <div className='w-100 flex gap-5 items-center justify-center h-10'>
                                <span className='font-medium text-blue-500 w-40'>P 1,500</span>
                                <div className='w-40 flex gap-5 items-center justify-center'>
                                    <div className='bg-teal-200 rounded-full cursor-pointer'>
                                        <BiPlus size={22} className='text-white' />
                                    </div>
                                    <span className='font-medium text-xl text-slate-700'>00</span>
                                    <div className='bg-pink-500 rounded-full cursor-pointer'>
                                        <BiMinus size={22} className='text-white' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-slate-300 h-20 w-full absolute bottom-0'>
                    <div className='w-full h-full flex justify-between items-center p-5'>
                        <span className='font-semibold text-2xl'>TOTAL</span>
                        <div className='w-100 flex justify-end items-center gap-3'>
                            <span className='font-medium text-3xl text-blue-600'>00</span>
                            <button className='w-30 py-2 rounded-2xl  font-semibold cursor-pointer border-amber-600 border text-amber-600 hover:bg-amber-600 hover:text-white'>
                                Checkout
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CreatePurchaseOrder