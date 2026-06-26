import React from 'react'
import CommonInputGroup from '../common/inputGroup'

const CreateUser = () => {
  return (
    <form action="" className='w-full h-full flex flex-col gap-2'>
        <CommonInputGroup label='Bar Code' />
        <CommonInputGroup label='Product Name' />
    </form>
  )
}

export default CreateUser