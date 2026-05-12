const Navbar = ({ setIsLoggedIn }) => {

  const handleLogout = () => {

    localStorage.removeItem('isLoggedIn')

    setIsLoggedIn(false)
  }

  return (

    <div className='bg-white shadow px-4 py-3 flex justify-between items-center'>

      <h2 className='text-lg md:text-2xl font-semibold truncate'>
        BPO Dashboard
      </h2>

      <button
        onClick={handleLogout}
        className='bg-red-500 text-white px-4 py-2 rounded-xl text-sm md:text-base'
      >
        Logout
      </button>

    </div>
  )
}

export default Navbar