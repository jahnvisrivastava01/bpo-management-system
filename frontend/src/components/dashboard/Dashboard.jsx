import { useEffect, useState } from 'react'

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

  return (
    <div>

      <h1 className='text-3xl font-bold mb-6'>
        Dashboard
      </h1>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>

        <div className='bg-white p-5 rounded-xl shadow'>
          <h2 className='text-gray-500'>
            Total Employees
          </h2>

          <p className='text-3xl font-bold mt-2'>
            {employeeCount}
          </p>
        </div>

        <div className='bg-white p-5 rounded-xl shadow'>
          <h2 className='text-gray-500'>
            Projects
          </h2>

          <p className='text-3xl font-bold mt-2'>
            15
          </p>
        </div>

        <div className='bg-white p-5 rounded-xl shadow'>
          <h2 className='text-gray-500'>
            Tickets
          </h2>

          <p className='text-3xl font-bold mt-2'>
            42
          </p>
        </div>

        <div className='bg-white p-5 rounded-xl shadow'>
          <h2 className='text-gray-500'>
            Attendance
          </h2>

          <p className='text-3xl font-bold mt-2'>
            92%
          </p>
        </div>

      </div>
    </div>
  )
}

export default Dashboard