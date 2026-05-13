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

  const [search, setSearch] =
    useState('')

  const [loading, setLoading] =
    useState(true)

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

      setLoading(false)

    } catch (error) {

      console.log(error)
    }
  }

  useEffect(() => {

    fetchEmployees()

  }, [])

  const handleSubmit = async () => {

  if (
    !form.emp_code ||
    !form.name ||
    !form.email ||
    !form.role ||
    !form.department ||
    !form.salary
  ) {

    alert('Please fill all fields')

    return
  }

  try {

    await addEmployee(form)

    fetchEmployees()

    setShowForm(false)

    setForm({
      emp_code: '',
      name: '',
      email: '',
      role: '',
      department: '',
      salary: '',
    })

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

    <div className='pb-24 md:pb-0'>

      <div className='flex flex-col md:flex-row justify-between md:items-center gap-4 mb-6'>

        <div>

          <h1 className='text-2xl md:text-4xl font-bold text-slate-800'>
            Employees
          </h1>

          <p className='text-gray-500 mt-1'>
            Total Employees:
            <span className='font-semibold'>
              {' '} {employees.length}
            </span>
          </p>

        </div>

        <button
          onClick={() => setShowForm(true)}
          className='bg-indigo-600 hover:bg-indigo-700 transition-all duration-200 text-white px-5 py-3 rounded-2xl shadow-md'
        >
          Add Employee
        </button>

      </div>

      <input
        type='text'
        placeholder='Search Employees...'
        className='w-full md:w-80 mb-5 p-3 rounded-2xl border outline-none shadow-sm'
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />

      {showForm && (

        <div className='bg-white/80 backdrop-blur-lg rounded-2xl p-5 md:p-6 shadow hover:shadow-2xl transition-all duration-300 border border-gray-100 mb-6'>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>

            <input
              placeholder='Employee Code'
              className='border p-3 rounded-2xl outline-none'
              onChange={(e) =>
                setForm({
                  ...form,
                  emp_code: e.target.value,
                })
              }
            />

            <input
              placeholder='Name'
              className='border p-3 rounded-2xl outline-none'
              onChange={(e) =>
                setForm({
                  ...form,
                  name: e.target.value,
                })
              }
            />

            <input
              placeholder='Email'
              className='border p-3 rounded-2xl outline-none'
              onChange={(e) =>
                setForm({
                  ...form,
                  email: e.target.value,
                })
              }
            />

            <input
              placeholder='Role'
              className='border p-3 rounded-2xl outline-none'
              onChange={(e) =>
                setForm({
                  ...form,
                  role: e.target.value,
                })
              }
            />

            <input
              placeholder='Department'
              className='border p-3 rounded-2xl outline-none'
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
              className='border p-3 rounded-2xl outline-none'
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
            className='mt-5 bg-indigo-600 hover:bg-indigo-700 transition-all duration-200 text-white px-5 py-3 rounded-2xl shadow-md'
          >
            Save Employee
          </button>

        </div>
      )}

      {loading ? (

        <div className='text-center py-10 text-gray-500'>
          Loading Employees...
        </div>

      ) : (

        <div className='bg-white/80 backdrop-blur-lg rounded-2xl shadow hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-x-auto'>

          <table className='w-full min-w-[800px]'>

            <thead className='bg-gray-100'>

              <tr>

                <th className='p-4 text-left'>
                  ID
                </th>

                <th className='p-4 text-left'>
                  Name
                </th>

                <th className='p-4 text-left'>
                  Email
                </th>

                <th className='p-4 text-left'>
                  Role
                </th>

                <th className='p-4 text-left'>
                  Department
                </th>

                <th className='p-4 text-left'>
                  Salary
                </th>

                <th className='p-4 text-left'>
                  Actions
                </th>

              </tr>

            </thead>

            <tbody>

              {employees
                .filter((emp) =>
                  emp.name
                    ?.toLowerCase()
                    .includes(
                      search.toLowerCase()
                    )
                )
                .map((emp) => (

                  <tr
                    key={emp.id}
                    className='border-t hover:bg-gray-50 transition-all duration-200'
                  >

                    <td className='p-4'>
                      {emp.id}
                    </td>

                    <td className='p-4 font-medium'>
                      {emp.name}
                    </td>

                    <td className='p-4'>
                      {emp.email}
                    </td>

                    <td className='p-4'>
                      {emp.role}
                    </td>

                    <td className='p-4'>
                      {emp.department}
                    </td>

                    <td className='p-4'>
                      ₹ {emp.salary}
                    </td>

                    <td className='p-4'>

                      <button
                        onClick={() =>
                          handleDelete(emp.id)
                        }
                        className='bg-red-500 hover:bg-red-600 transition-all duration-200 text-white px-4 py-2 rounded-xl shadow-md'
                      >
                        Delete
                      </button>

                    </td>

                  </tr>
                ))}

            </tbody>

          </table>

          {employees.length === 0 && (

            <div className='text-center py-10 text-gray-400'>

              No Employees Found

            </div>

          )}

        </div>
      )}

    </div>
  )
}

export default Employees