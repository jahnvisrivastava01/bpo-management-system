import { useState } from 'react'

import {
  addEmployee,
} from '../../services/employeeService'

const EmployeeForm = ({
  fetchEmployees,
  setShowForm,
}) => {
  const [form, setForm] = useState({
    emp_code: '',
    name: '',
    email: '',
    phone: '',
    role: '',
    department: '',
    shift_timing: '',
    salary: '',
    status: 'Active',
  })

const handleSubmit = async () => {
    if (
        !form.emp_code ||
        !form.name ||
        !form.email ||
        !form.phone ||
        !form.role ||
        !form.department ||
        !form.shift_timing ||
        !form.salary
    ) {
        alert('Please fill all fields')
        return
    }

  try {
    await addEmployee(form)

    fetchEmployees()

    setShowForm(false)

  } catch (error) {
    console.log(error)
  }
}

  return (
    <div className='bg-white p-5 rounded-xl shadow mb-5'>
      <div className='grid grid-cols-2 gap-4'>
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
          placeholder='Employee Name'
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
          placeholder='Phone'
          className='border p-2 rounded'
          onChange={(e) =>
            setForm({
              ...form,
              phone: e.target.value,
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
          placeholder='Shift Timing'
          className='border p-2 rounded'
          onChange={(e) =>
            setForm({
              ...form,
              shift_timing: e.target.value,
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
              salary: Number(e.target.value)
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
  )
}

export default EmployeeForm