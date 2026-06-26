import React from 'react'
import CommonInputGroup from '../common/inputGroup'
import GreenButton from '../common/greenButton'
import RedButton from '../common/redButton'

const LoginForm = () => {
  return (
    <form className='w-1/2 h-full'>
        <CommonInputGroup label="Username"/>
        <CommonInputGroup label="Password" />
        <GreenButton label='Login' className=''/>
        <RedButton label='Close' />
    </form>
  )
}

export default LoginForm