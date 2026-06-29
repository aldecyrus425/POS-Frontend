import React from 'react'
import CommonInputGroup from '../common/inputGroup'
import RedButton from '../common/redButton'
import GreenButton from '../common/greenButton'

const CreateSupplier = () => {
    return (
        <form action="" className='w-full h-full flex flex-col gap-2'>
            <CommonInputGroup label='Supplier Name' />
            <CommonInputGroup label='Contact Number' />
            <CommonInputGroup label='Address' />
            <CommonInputGroup label='Email' />
            <div className='flex flex-row gap-5'>
                <RedButton label='Cancel' />
                <GreenButton label='Submit' />
            </div>
        </form>
    )
}

export default CreateSupplier