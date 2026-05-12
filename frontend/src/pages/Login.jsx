import { useState } from 'react'

const Login = ({ setIsLoggedIn }) => {

  const [email, setEmail] = useState('')

  const [password, setPassword] =
    useState('')

  const handleLogin = () => {

    if (
      email === 'admin@gmail.com' &&
      password === 'admin123'
    ) {

      setIsLoggedIn(true)

      localStorage.setItem(
        'isLoggedIn',
        'true'
      )

    } else {

      alert('Invalid Credentials')
    }
  }

  return (
    <div className='min-h-screen flex justify-center items-center bg-gray-100'>

      <div className='bg-white p-8 rounded-2xl shadow-lg w-full max-w-md'>

        <h1 className='text-3xl font-bold text-center mb-6'>
          BPO Management Login
        </h1>

        <div className='space-y-4'>

          <input
            type='email'
            placeholder='Email'
            className='border p-3 rounded-lg w-full'
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          <input
            type='password'
            placeholder='Password'
            className='border p-3 rounded-lg w-full'
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

          <button
            onClick={handleLogin}
            className='bg-blue-600 text-white w-full py-3 rounded-lg'
          >
            Login
          </button>

        </div>

        <div className='mt-5 text-sm text-gray-500 text-center'>
          Demo Credentials:
          <br />
          admin@gmail.com
          <br />
          admin123
        </div>

      </div>
    </div>
  )
}

export default Login