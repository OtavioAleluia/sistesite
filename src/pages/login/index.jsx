import React from 'react'
import './loginPage.css'
import {useRef, useState,useEffect} from 'react'

export const LoginPage = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user,setUser] = useState('')
  const [pwd,setPwd] = useState('')
  const [errMsg,setErrMsg] = useState('')
  const [success,setSuccess] = useState(false)

  useEffect( () => userRef.current.focus(),[])
  useEffect(() => setErrMsg(''), [user,pwd])

  return (
    <form className='container'> 
      <div className="header">
          <div className="text">LOGIN</div>
      </div>
      <div className="inputs">
        <div className="input">
          <label htmlFor="username">Usuario:</label>
          <img src="" alt="" />
          <input                    // input login
          type="text" 
          id='username' 
          ref={userRef} 
          autoComplete="off"
          />
        </div>
        <div className="input">
          <label htmlFor="password">Senha:</label>
          <img src="" alt="" />
          <input                   //input Password
          type="password"
          id='username'
          
          />
        </div>
      </div>
      <div className="submmit-container">
        <div className="submmit">ENTRAR</div>
      </div>
    </form>
  )
}

