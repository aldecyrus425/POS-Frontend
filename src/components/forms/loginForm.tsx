import React from 'react'
import CommonInputGroup from '../common/inputGroup'

const LoginForm = () => {
  return (
    <form className='w-1/2 h-full'>
        <CommonInputGroup label="Username"/>
        <CommonInputGroup label="Password" />
    </form>
  )
}

export default LoginForm