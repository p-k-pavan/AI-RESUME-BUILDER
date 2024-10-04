import { SignIn } from '@clerk/clerk-react'
import React from 'react'

const SignInPage = () => {
  return (
    <div className='flex justify-center my-10 sm:my-40 items-center'>
        <SignIn />
    </div>
  )
}

export default SignInPage
