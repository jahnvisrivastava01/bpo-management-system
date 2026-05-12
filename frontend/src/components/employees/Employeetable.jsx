import { deleteEmployee } from '../../services/employeeService'

const EmployeeTable = ({
  employees,
  fetchEmployees,
}) => {

  const handleDelete = async (id) => {

    try {

      await deleteEmployee(id)

      fetchEmployees()

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='bg-white rounded-xl shadow overflow-hidden overflow-x-auto'>

      <table className='w-full min-w-[900px]'>

        <thead className='bg-gray-100'>
          <tr>
            <th className='p-3 text-left'>ID</th>
            <th className='p-3 text-left'>Name</th>
            <th className='p-3 text-left'>Email</th>
            <th className='p-3 text-left'>Role</th>
            <th className='p-3 text-left'>Department</th>
            <th className='p-3 text-left'>Salary</th>
            <th className='p-3 text-left'>Actions</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id} className='border-t'>

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
  )
}

export default EmployeeTable
