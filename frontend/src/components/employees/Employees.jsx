import { useEffect, useState } from 'react'

import EmployeeTable from './EmployeeTable'
import EmployeeForm from './EmployeeForm'

import {
  getEmployees,
} from '../../services/employeeService'

const Employees = () => {
  const [employees, setEmployees] = useState([])

  const [showForm, setShowForm] =
    useState(false)

  const fetchEmployees = async () => {
    try {
      const response = await getEmployees()

      setEmployees(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchEmployees()
  }, [])

  return (
    <div>
      <div className='flex justify-between mb-5'>
        <h1 className='text-3xl font-bold'>
          Employees
        </h1>

        <button
          onClick={() => setShowForm(true)}
          className='bg-blue-600 text-white px-4 py-2 rounded-lg'
        >
          Add Employee
        </button>
      </div>

      {showForm && (
        <EmployeeForm
          fetchEmployees={fetchEmployees}
          setShowForm={setShowForm}
        />
      )}

      <EmployeeTable
      employees={employees}
      fetchEmployees={fetchEmployees}/>
    </div>
  )
}

export default Employees