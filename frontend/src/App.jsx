import { useState } from 'react'

import Sidebar from './layouts/Sidebar'
import Navbar from './layouts/Navbar'

import Dashboard from './components/dashboard/Dashboard'
import Employees from './components/employees/Employees'
import Clients from './components/clients/Clients'
import Projects from './components/projects/Projects'
import Tickets from './components/tickets/Tickets'
import Attendance from './components/attendance/Attendance'
import Performance from './components/performance/Performance'
import Reports from './components/reports/Reports'

import Login from './pages/Login'

function App() {

  const [active, setActive] =
    useState('dashboard')

  const [isLoggedIn, setIsLoggedIn] =
    useState(
      localStorage.getItem('isLoggedIn') ===
        'true'
    )

  const renderPage = () => {

    switch (active) {

      case 'dashboard':
        return <Dashboard />

      case 'employees':
        return <Employees />

      case 'clients':
        return <Clients />

      case 'projects':
        return <Projects />

      case 'tickets':
        return <Tickets />

      case 'attendance':
        return <Attendance />

      case 'performance':
        return <Performance />

      case 'reports':
        return <Reports />

      default:
        return <Dashboard />
    }
  }

  if (!isLoggedIn) {

    return (
      <Login
        setIsLoggedIn={setIsLoggedIn}
      />
    )
  }

  return (
    <div className='flex min-h-screen'>

      <Sidebar
        active={active}
        setActive={setActive}
      />

      <div className='flex-1 bg-gray-100 overflow-auto'>

        <Navbar
          setIsLoggedIn={setIsLoggedIn}
        />

        <div className='p-3 md:p-6'>

          {renderPage()}

        </div>

      </div>

    </div>
  )
}

export default App