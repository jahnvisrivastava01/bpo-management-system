const navItems = [
  'dashboard',
  'employees',
  'clients',
  'projects',
  'tickets',
  'attendance',
  'performance',
  'reports'
]

const Sidebar = ({ active, setActive }) => {

  return (
    <>

      {/* DESKTOP SIDEBAR */}

      <div className='hidden md:block w-64 bg-blue-900 text-white min-h-screen p-5'>

        <h1 className='text-2xl font-bold mb-8'>
          BPO System
        </h1>

        <div className='space-y-3'>

          {navItems.map((item) => (

            <button
              key={item}
              onClick={() => setActive(item)}
              className={`w-full text-left px-4 py-3 rounded-lg capitalize transition-all duration-200 ${
                active === item
                  ? 'bg-white text-blue-900 font-semibold'
                  : 'hover:bg-blue-800'
              }`}
            >

              {item}

            </button>

          ))}

        </div>

      </div>

      {/* MOBILE BOTTOM NAV */}

      <div className='fixed bottom-0 left-0 w-full bg-white shadow-lg border-t flex justify-around items-center py-3 md:hidden z-50'>

        {navItems.slice(0, 4).map((item) => (

          <button
            key={item}
            onClick={() => setActive(item)}
            className={`capitalize text-sm ${
              active === item
                ? 'text-blue-700 font-bold'
                : 'text-gray-500'
            }`}
          >

            {item}

          </button>

        ))}

      </div>

    </>
  )
}

export default Sidebar