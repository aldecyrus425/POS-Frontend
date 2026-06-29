import React from 'react'
import CommonInputGroup from '../common/inputGroup'
import RedButton from '../common/redButton'
import GreenButton from '../common/greenButton'

const CreateUnits = () => {
    return (
        <form action="" className='w-full h-full flex flex-col gap-2'>
            <CommonInputGroup label='Unit Name' />
            <CommonInputGroup label='Symbol' />
            <div className='flex flex-row gap-5'>
                <RedButton label='Cancel' />
                <GreenButton label='Submit' />
            </div>
        </form>
    )
}

export default CreateUnits