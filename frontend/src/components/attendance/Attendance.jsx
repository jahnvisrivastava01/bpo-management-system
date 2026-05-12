const attendanceData = [
  {
    id: 1,
    name: 'Jahnvi',
    department: 'Software',
    date: '2026-05-12',
    status: 'Present',
  },

  {
    id: 2,
    name: 'Anoushka',
    department: 'Development',
    date: '2026-05-12',
    status: 'Absent',
  },
]

const Attendance = () => {
  return (
    <div>

      <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6'>

        <h1 className='text-3xl font-bold'>
          Attendance Management
        </h1>

        <button className='bg-blue-600 text-white px-4 py-2 rounded-lg'>
          Mark Attendance
        </button>

      </div>

      <div className='bg-white rounded-xl shadow overflow-x-auto'>

        <table className='w-full min-w-[700px]'>

          <thead className='bg-gray-100'>
            <tr>
              <th className='p-3 text-left'>ID</th>
              <th className='p-3 text-left'>Employee</th>
              <th className='p-3 text-left'>Department</th>
              <th className='p-3 text-left'>Date</th>
              <th className='p-3 text-left'>Status</th>
            </tr>
          </thead>

          <tbody>
            {attendanceData.map((item) => (
              <tr key={item.id} className='border-t'>

                <td className='p-3'>{item.id}</td>
                <td className='p-3'>{item.name}</td>
                <td className='p-3'>{item.department}</td>
                <td className='p-3'>{item.date}</td>

                <td className='p-3'>
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      item.status === 'Present'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-red-100 text-red-700'
                    }`}
                  >
                     {item.status}
                  </span>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Attendance
         