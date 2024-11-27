import React from 'react'
import { useState } from 'react'

const Signup = () => {

  const {email, setEmail} = useState('')
  const {password, setPassword} = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Log in</h3>

        <label>Email:</label>
        <input type='email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
        <label>Password:</label>
        <input type='password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
        <button>Sign up</button>
      </form>
    </div>
  )
}

export default Signup
