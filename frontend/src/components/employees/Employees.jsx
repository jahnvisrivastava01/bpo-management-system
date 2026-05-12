import { useEffect, useState } from 'react'

import {
  getEmployees,
  addEmployee,
  deleteEmployee,
} from '../../services/employeeService'

const Employees = () => {

  const [employees, setEmployees] =
    useState([])

  const [showForm, setShowForm] =
    useState(false)

  const [form, setForm] = useState({
    emp_code: '',
    name: '',
    email: '',
    role: '',
    department: '',
    salary: '',
  })

  const fetchEmployees = async () => {

    try {

      const response =
        await getEmployees()

      setEmployees(response.data)

    } catch (error) {

      console.log(error)
    }
  }

  useEffect(() => {

    fetchEmployees()

  }, [])

  const handleSubmit = async () => {

    try {

      await addEmployee(form)

      fetchEmployees()

      setShowForm(false)

    } catch (error) {

      console.log(error)
    }
  }

  const handleDelete = async (id) => {

    try {

      await deleteEmployee(id)

      fetchEmployees()

    } catch (error) {

      console.log(error)
    }
  }

  return (
    <div>

      <div className='flex justify-between items-center mb-6'>

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

        <div className='bg-white p-5 rounded-xl shadow mb-5'>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>

            <input
              placeholder='Employee Code'
              className='border p-2 rounded'
              onChange={(e) =>
                setForm({
                  ...form,
                  emp_code: e.target.value,
                })
              }
            />

            <input
              placeholder='Name'
              className='border p-2 rounded'
              onChange={(e) =>
                setForm({
                  ...form,
                  name: e.target.value,
                })
              }
            />

            <input
              placeholder='Email'
              className='border p-2 rounded'
              onChange={(e) =>
                setForm({
                  ...form,
                  email: e.target.value,
                })
              }
            />

            <input
              placeholder='Role'
              className='border p-2 rounded'
              onChange={(e) =>
                setForm({
                  ...form,
                  role: e.target.value,
                })
              }
            />

            <input
              placeholder='Department'
              className='border p-2 rounded'
              onChange={(e) =>
                setForm({
                  ...form,
                  department: e.target.value,
                })
              }
            />

            <input
              type='number'
              placeholder='Salary'
              className='border p-2 rounded'
              onChange={(e) =>
                setForm({
                  ...form,
                  salary: Number(e.target.value),
                })
              }
            />

          </div>

          <button
            onClick={handleSubmit}
            className='bg-green-600 text-white px-4 py-2 rounded-lg mt-4'
          >
            Save Employee
          </button>

        </div>
      )}

      <div className='bg-white rounded-xl shadow overflow-x-auto'>

        <table className='w-full min-w-[800px]'>

          <thead className='bg-gray-100'>

            <tr>

              <th className='p-3 text-left'>
                ID
              </th>

              <th className='p-3 text-left'>
                Name
              </th>

              <th className='p-3 text-left'>
                Email
              </th>

              <th className='p-3 text-left'>
                Role
              </th>

              <th className='p-3 text-left'>
                Department
              </th>

              <th className='p-3 text-left'>
                Salary
              </th>

              <th className='p-3 text-left'>
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {employees.map((emp) => (

              <tr
                key={emp.id}
                className='border-t'
              >

                <td className='p-3'>{emp.id}</td>

                <td className='p-3'>
                  {emp.name}
                </td>

                <td className='p-3'>
                  {emp.email}
                </td>

                <td className='p-3'>
                  {emp.role}
                </td>

                <td className='p-3'>
                  {emp.department}
                </td>

                <td className='p-3'>
                  ₹ {emp.salary}
                </td>

                <td className='p-3'>

                  <button
                    onClick={() =>
                      handleDelete(emp.id)
                    }
                    className='bg-red-500 text-white px-3 py-1 rounded'
                  >
                    Delete
                  </button>

                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  )
}

export default Employees