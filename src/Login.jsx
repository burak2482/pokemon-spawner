import React from 'react'
import { useState } from 'react'
import { useLogin } from '../hooks/loginHook'

const Signup = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { login, error, isLoading } = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await login(email, password)
  }

  return (
    <div className="flex flex-col justify-center items-center bg-customPink min-h-screen">
      <div className="flex flex-col justify-center items-center w-1/4 h-full py-24 px-48 bg-customWhite rounded-3xl">
        <form onSubmit={handleSubmit} className="flex flex-col justify-center gap-2 bg-customWhite text-black">
          <h3 className="font-semibold text-2xl text-center mb-3">Log in</h3>

          <label className="font-semibold text-xl mb-3">Email:</label>
          <input type='email' placeholder="E-mail"className="border border-x-2 px-6 text-left font-semibold" value={email} onChange={(e) => setEmail(e.target.value)}></input>
          <label className="font-semibold text-xl mb-3">Password:</label>
          <input type='password' placeholder="Password"className="border border-x-2 px-6 text-left font-semibold" value={password} onChange={(e) => setPassword(e.target.value)}></input>
          <button disabled={isLoading} className="py-2 px-10 bg-slate-700 font-semibold text-white rounded-full mt-5 active:bg-slate-600">Log in</button>
        </form>
        {error && <div className="border-2 border-red-400 bg-red-200 font-semibold rounded-sm py-1 px-2 mt-3">{error}</div>}
      </div>
    </div>
  )
}

export default Signup
