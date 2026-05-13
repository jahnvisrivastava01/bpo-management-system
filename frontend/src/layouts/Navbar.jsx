import { FaUserCircle } from 'react-icons/fa'

const Navbar = ({ setIsLoggedIn }) => {

  const handleLogout = () => {

    localStorage.removeItem(
      'isLoggedIn'
    )

    setIsLoggedIn(false)
  }

  return (

    <div className='bg-white/80 backdrop-blur-lg shadow-md border-b px-4 md:px-6 py-4 flex justify-between items-center sticky top-0 z-40'>

      {/* LEFT SECTION */}

      <div>

        <h2 className='text-xl md:text-2xl font-bold text-slate-800'>
          BPO Dashboard
        </h2>

        <p className='text-sm text-gray-500 mt-1'>
          {new Date().toLocaleDateString()}
        </p>

      </div>

      {/* RIGHT SECTION */}

      <div className='flex items-center gap-4'>

        {/* PROFILE ICON */}

        <div className='text-4xl text-indigo-600'>

          <FaUserCircle />

        </div>

        {/* LOGOUT BUTTON */}

        <button
          onClick={handleLogout}
          className='bg-red-500 hover:bg-red-600 transition-all duration-200 text-white px-4 py-2 rounded-2xl shadow-md'
        >
          Logout
        </button>

      </div>

    </div>
  )
}

export default Navbar