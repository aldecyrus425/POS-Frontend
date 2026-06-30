import React from 'react'
import CommonInputGroup from '../common/inputGroup'
import SelectGroup from '../common/selectGroup'
import PasswordInputGroup from '../common/passwordInputGroup'

const CreateUser = () => {
  return (
    <form action="" className='w-full h-full flex flex-col gap-2 p-2'>
      <CommonInputGroup label='First Name' />
      <CommonInputGroup label='Middle Name' />
      <CommonInputGroup label='Last Name' />
      <CommonInputGroup label='Username' />
      <PasswordInputGroup label='Password' />
      <PasswordInputGroup label='Confirm Password' />
      <CommonInputGroup label='Email' />
      <CommonInputGroup label='Contact Number' />
      <SelectGroup label='Role' options={[{label: "User", value: "User"}, {label: "Cashier", value: "Cashier"}]} />
      <SelectGroup label='Branch' options={[{label: "", value:""}]} />

    </form>
  )
}

export default CreateUser