const Reports = () => {

  const reportCards = [
    {
      title: 'Total Employees',
      value: 120,
    },

    {
      title: 'Active Projects',
      value: 15,
    },

    {
      title: 'Resolved Tickets',
      value: 320,
    },

    {
      title: 'Attendance Rate',
      value: '92%',
    },
  ]

  return (
    <div>

      <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6'>

        <h1 className='text-3xl font-bold'>
          Reports & Analytics
        </h1>

        <button className='bg-blue-600 text-white px-4 py-2 rounded-lg'>
          Download Report
        </button>
        </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8'>

        {reportCards.map((card, index) => (

          <div
            key={index}
            className='bg-white p-5 rounded-xl shadow'
          >

            <h2 className='text-gray-500 mb-2'>
              {card.title}
            </h2>

            <p className='text-3xl font-bold'>
              {card.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Reports
