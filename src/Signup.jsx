import React from 'react'
import { useState } from 'react'

const Signup = () => {

  const {email, setEmail} = useState('')
  const {password, setPassword} = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
  }

  return (
    <div className="flex flex-col justify-center items-center bg-customPink min-h-screen">
      <div className="flex flex-col justify-center items-center w-1/4 h-full py-24 px-48 bg-customWhite rounded-3xl">
        <form onSubmit={handleSubmit} className="flex flex-col justify-center gap-2 bg-customWhite text-black">
          <h3 className="font-semibold text-2xl text-center mb-3">Sign up</h3>

          <label className="font-semibold text-xl mb-3">Email:</label>
          <input type='email' placeholder="E-mail"className="border border-x-2 px-6 text-left font-semibold" value={email} onChange={(e) => setEmail(e.target.value)}></input>
          <label className="font-semibold text-xl mb-3">Password:</label>
          <input type='password' placeholder="Password"className="border border-x-2 px-6 text-left font-semibold" value={password} onChange={(e) => setPassword(e.target.value)}></input>
          <button className="py-2 px-10 bg-slate-700 font-semibold text-white rounded-full mt-5 active:bg-slate-600">Sign up</button>
        </form>
      </div>
    </div>
  )
}

export default Signup
