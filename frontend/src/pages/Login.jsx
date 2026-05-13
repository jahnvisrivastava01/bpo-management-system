import { useState } from 'react'

const Login = ({ setIsLoggedIn }) => {

  const [email, setEmail] =
    useState('')

  const [password, setPassword] =
    useState('')

  const handleLogin = () => {

    if (
      email === 'admin@gmail.com' &&
      password === 'admin123'
    ) {

      localStorage.setItem(
        'isLoggedIn',
        'true'
      )

      setIsLoggedIn(true)

    } else {

      alert('Invalid Credentials')
    }
  }

  return (

    <div className='min-h-screen flex justify-center items-center bg-gradient-to-br from-indigo-600 via-violet-600 to-slate-900 p-5'>

      <div className='bg-white/20 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl p-8 w-full max-w-md'>

        <h1 className='text-4xl font-bold text-white text-center mb-2'>
          BPO
        </h1>

        <p className='text-center text-gray-200 mb-8'>
          Management Dashboard
        </p>

        <div className='space-y-5'>

          {/* EMAIL INPUT */}

          <input
            type='email'
            placeholder='Enter Email'
            className='w-full p-4 rounded-2xl outline-none bg-white text-slate-800 placeholder-gray-500 shadow-md'
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          {/* PASSWORD INPUT */}

          <input
            type='password'
            placeholder='Enter Password'
            className='w-full p-4 rounded-2xl outline-none bg-white text-slate-800 placeholder-gray-500 shadow-md'
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

          {/* LOGIN BUTTON */}

          <button
            onClick={handleLogin}
            className='w-full bg-indigo-600 hover:bg-indigo-700 transition-all duration-300 text-white py-4 rounded-2xl shadow-lg font-semibold'
          >
            Login
          </button>

        </div>

        {/* DEMO CREDENTIALS */}

        <div className='mt-8 bg-white/10 border border-white/20 rounded-2xl p-4 text-sm text-gray-100'>

          <p className='font-semibold mb-2'>
            Demo Credentials
          </p>

          <p>
            Email:
            <span className='font-medium'>
              {' '}admin@gmail.com
            </span>
          </p>

          <p>
            Password:
            <span className='font-medium'>
              {' '}admin123
            </span>
          </p>

        </div>

      </div>

    </div>
  )
}

export default Login