import { getAllByPlaceholderText } from '@testing-library/react'
import React, { useRef } from 'react'
import { auth } from '../firebase'
import './SigninScreen.css'

function SigninScreen() {
  const emailRef = useRef(null)
  const passwordRef = useRef(null)


  const register = (e) =>{
    e.preventDefault()

    auth.createUserWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    ).then((authUser) => {
      console.log(authUser)
    }).catch((error) => {
      alert(error.message)
    })
  }

  const signIn = (e) =>{
    e.preventDefault()

    auth.signInWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    ).then((authUser) => {
      console.log(authUser)
    }).catch((error) => {
      console.log(error.message)
    })
  }

  return (
    <div className='signinScreen'>
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} type="email" placeholder="Email"/>
        <input ref={passwordRef} type="password" placeholder="Password"/>
        <button 
        onClick={signIn}
        type='submit'>Sign In</button>
      
        <h4>
          <span className='signupScreen_gray'>New to NetFflix? </span>
          <span 
          onClick={register}
          className='signupScreen_link'>Sign up now</span>
          </h4>
      </form>
    </div>
  )
}

export default SigninScreen