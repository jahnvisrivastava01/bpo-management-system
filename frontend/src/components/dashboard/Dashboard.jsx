import { useEffect, useState } from 'react'

import {
  FaUsers,
  FaProjectDiagram,
  FaTicketAlt,
  FaClipboardCheck,
} from 'react-icons/fa'

import {
  getEmployeeCount,
} from '../../services/employeeService'

const Dashboard = () => {

  const [employeeCount, setEmployeeCount] =
    useState(0)

  const fetchEmployeeCount = async () => {

    try {

      const response =
        await getEmployeeCount()

      setEmployeeCount(response.data.count)

    } catch (error) {

      console.log(error)
    }
  }

  useEffect(() => {

    fetchEmployeeCount()

  }, [])

  const cards = [
    {
      title: 'Employees',
      value: employeeCount,
      icon: <FaUsers />,
      growth: '+12% this month',
    },

    {
      title: 'Projects',
      value: 15,
      icon: <FaProjectDiagram />,
      growth: '+4 active',
    },

    {
      title: 'Tickets',
      value: 42,
      icon: <FaTicketAlt />,
      growth: '+8 resolved today',
    },

    {
      title: 'Attendance',
      value: '92%',
      icon: <FaClipboardCheck />,
      growth: '+3% improvement',
    },
  ]

  return (

    <div className='pb-24 md:pb-0'>

      <h1 className='text-2xl md:text-4xl font-bold text-slate-800 mb-6 md:mb-8'>
        Dashboard
      </h1>

      <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 md:gap-6'>

        {cards.map((card, index) => (

          <div
            key={index}
            className='bg-white/80 backdrop-blur-lg rounded-2xl p-5 md:p-6 shadow hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-white/30'
          >

            <div className='flex justify-between items-start'>

              <div>

                <h2 className='text-gray-500 text-sm md:text-lg'>
                  {card.title}
                </h2>

                <p className='text-3xl md:text-4xl font-bold mt-2 md:mt-3 text-slate-800'>
                  {card.value}
                </p>

                <p className='text-green-500 text-xs md:text-sm mt-2 md:mt-3'>
                  {card.growth}
                </p>

              </div>

              <div className='text-3xl md:text-5xl text-indigo-600'>

                {card.icon}

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  )
}

export default Dashboard