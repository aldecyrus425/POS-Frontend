import React from 'react'
import CommonInputGroup from '../common/inputGroup'
import SelectGroup from '../common/selectGroup'
import RedButton from '../common/redButton'
import GreenButton from '../common/greenButton'

const CreateProduct = () => {
  return (
      <form action="" className='w-full h-full flex flex-col gap-2'>
          <CommonInputGroup label='Bar Code' />
          <CommonInputGroup label='SKU' />
          <CommonInputGroup label='Product Name' />
          <CommonInputGroup label='Description' />
          <SelectGroup label='Category' options={[{ label: "Seller", value: "Seller" }, { label: "Vendor", value: "Vendor" }]} />
          <SelectGroup label='Units' options={[{label: "", value: ""}]} />
          <CommonInputGroup label='Cost Price' type='number' />
          <CommonInputGroup label='Selling Price' type='number' />
          <CommonInputGroup label='Reorder Level' />
          <div className='flex flex-row gap-5'>
              <RedButton label='Cancel' />
              <GreenButton label='Submit' />
          </div>
      </form>
  )
}

export default CreateProduct