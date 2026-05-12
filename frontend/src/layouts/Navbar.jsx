const Navbar = ({ setIsLoggedIn }) => {

  const handleLogout = () => {

    localStorage.removeItem('isLoggedIn')

    setIsLoggedIn(false)
  }

  return (
    <div className='bg-white shadow p-4 flex justify-between items-center'>

      <h2 className='text-xl font-semibold'>
        BPO Management Dashboard
      </h2>

      <button
        onClick={handleLogout}
        className='bg-red-500 text-white px-4 py-2 rounded-lg'
      >
        Logout
      </button>

    </div>
  )
}

export default Navbar