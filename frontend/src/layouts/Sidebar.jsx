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
    <div className='w-20 md:w-64 bg-blue-900 text-white min-h-screen p-5'>
      <h1 className='text-2xl font-bold mb-8'>BPO System</h1>

      <div className='space-y-3'>
        {navItems.map(item => (
          <button
            key={item}
            onClick={() => setActive(item)}
            className={`w-full text-left px-4 py-2 rounded-lg capitalize ${active === item ? 'bg-white text-blue-900' : 'hover:bg-blue-800'}`}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Sidebar
      