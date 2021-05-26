import React from 'react'

function loggin() {
  
}

const Authentication = () => {
  return (
    <div>
      <div className='auth_buttons'>
        <input placeholder='Full Name (required if registering)'></input>
        <input placeholder='Profile pic URL (optional)'></input>
        <input placeholder='Email'></input>
        <input placeholder='Password'></input>
        <button onClick={loggin} type='submit'></button>
      </div>
    </div>
  )
}

export default Authentication;
