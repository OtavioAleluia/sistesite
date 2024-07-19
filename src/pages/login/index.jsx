import React from 'react'
import './loginPage.css'

export const LoginPage = () => {
  return (
    <div className='container'>
      <div className="header">
          <div className="text">LOGIN</div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src="" alt="" />
          <input type="text" />
        </div>
        <div className="input">
          <img src="" alt="" />
          <input type="password"/>
        </div>
      </div>
      <div className="submmit-container">
        <div className="submmit">ENTRAR</div>
      </div>
    </div>
  )
}

