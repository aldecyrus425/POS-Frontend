import React from 'react'
import { BiPlus, BiSearch } from 'react-icons/bi'
import coke from '../../assets/coke.jpg'
import { FiPenTool, FiTrash2 } from 'react-icons/fi'
import { BsFillPencilFill } from 'react-icons/bs'

const Product = () => {
    return (
        <div className='w-full flex flex-col gap-3'>
            <span className='font-display font-medium text-xl'>Product Lists</span>
            <div className='w-full flex justify-between'>
                <div className='flex items-end gap-4'>
                    <div className='w-100 flex h-7 border border-slate-400 rounded-lg px-3'>
                        <BiSearch className='h-full items-center' />
                        <input type="text" className='w-full h-full focus:outline-none px-3 text-sm' placeholder='Search Products...' />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <span className='text-xs font-medium text-slate-700'>Category</span>
                        <select name="" id="" className='w-30 h-7 border border-slate-400 rounded-lg text-xs px-2 font-medium'>
                            <option value="" selected>All</option>
                        </select>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <span className='text-xs font-medium text-slate-700'>Status</span>
                        <select name="" id="" className='w-30 h-7 border border-slate-400 rounded-lg text-xs px-2 font-medium'>
                            <option value="" selected>All</option>
                        </select>
                    </div>
                </div>
                <button className='bg-indigo-500 text-white px-2 py-1 flex items-center justify-between w-35 text-sm rounded-lg cursor-pointer h-8 self-end'>
                    <BiPlus size={22}/>
                    Add Product
                </button>
            </div>
            <table className='mt-2 bg-slate-50 border border-slate-200 rounded-lg shadow-xl border-spacing-x-2 border-separate'>
                <thead className='text-sm'>
                    <tr>
                        <th className='py-2 text-center'>Image</th>
                        <th className='py-2 text-start'>Barcode</th>
                        <th className='py-2 text-left'>Product Name</th>
                        <th className='py-2 text-left'>Category</th>
                        <th className='py-2 text-left'>Unit</th>
                        <th className='py-2 text-left'>Selling Price</th>
                        <th className='py-2 text-left'>Cost Price</th>
                        <th className='py-2 text-left'>Stock</th>
                        <th className='py-2 text-left'>Status</th>
                        <th className='py-2 text-center'>Action</th>
                    </tr>
                </thead>
                <tbody className='text-xs font-medium'>
                    <tr>
                        <td className='bg-slate-600'>
                            <img src={coke} alt="" className='w-10 h-10 object-fill m-auto' />
                        </td>
                        <td>32132131312</td>
                        <td>Coke 1.5L</td>
                        <td>Softdrinks</td>
                        <td>Bottle</td>
                        <td>P75.00</td>
                        <td>P80.00</td>
                        <td>90</td>
                        <td>
                            <span className='border border-green-400 text-green-400 bg-green-100 py-1 px-2 text-[10px] font-medium rounded-lg'>Active</span>
                        </td>
                        <td>
                            <div className='flex gap-3 w-full justify-center'>
                                <button className='h-5 w-5 flex items-center justify-center cursor-pointer border border-green-400 text-green-400 rounded-lg hover:bg-green-400 hover:text-white'>
                                    <BsFillPencilFill size={10}/>
                                </button>
                                <button className='h-5 w-5 flex items-center justify-center cursor-pointer border border-red-400 text-red-400 rounded-lg hover:bg-red-400 hover:text-white'>
                                    <FiTrash2 />

                                </button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Product