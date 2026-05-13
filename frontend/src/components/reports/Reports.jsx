import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

const Reports = () => {

  const data = [
    {
      month: 'Jan',
      employees: 40,
      tickets: 24,
    },

    {
      month: 'Feb',
      employees: 55,
      tickets: 35,
    },

    {
      month: 'Mar',
      employees: 70,
      tickets: 45,
    },

    {
      month: 'Apr',
      employees: 82,
      tickets: 50,
    },

    {
      month: 'May',
      employees: 95,
      tickets: 60,
    },
  ]

  return (

    <div className='pb-24 md:pb-0'>

      <h1 className='text-2xl md:text-4xl font-bold text-slate-800 mb-8'>
        Reports & Analytics
      </h1>

      {/* TOP CARDS */}

      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>

        <div className='bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow hover:shadow-2xl transition-all duration-300 border border-gray-100'>

          <h2 className='text-gray-500 text-lg'>
            Total Revenue
          </h2>

          <p className='text-4xl font-bold mt-3 text-slate-800'>
            ₹ 8.2L
          </p>

          <p className='text-green-500 text-sm mt-3'>
            +18% this month
          </p>

        </div>

        <div className='bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow hover:shadow-2xl transition-all duration-300 border border-gray-100'>

          <h2 className='text-gray-500 text-lg'>
            Performance Score
          </h2>

          <p className='text-4xl font-bold mt-3 text-slate-800'>
            89%
          </p>

          <p className='text-green-500 text-sm mt-3'>
            Excellent Growth
          </p>

        </div>

        <div className='bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow hover:shadow-2xl transition-all duration-300 border border-gray-100'>

          <h2 className='text-gray-500 text-lg'>
            Client Satisfaction
          </h2>

          <p className='text-4xl font-bold mt-3 text-slate-800'>
            94%
          </p>

          <p className='text-green-500 text-sm mt-3'>
            Positive Feedback
          </p>

        </div>

      </div>

      {/* CHART */}

      <div className='bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow hover:shadow-2xl transition-all duration-300 border border-gray-100'>

        <h2 className='text-2xl font-bold text-slate-800 mb-6'>
          Monthly Analytics
        </h2>

        <ResponsiveContainer
          width='100%'
          height={350}
        >

          <BarChart data={data}>

            <XAxis dataKey='month' />

            <YAxis />

            <Tooltip />

            <Bar
              dataKey='employees'
              fill='#6366f1'
              radius={[10, 10, 0, 0]}
            />

            <Bar
              dataKey='tickets'
              fill='#8b5cf6'
              radius={[10, 10, 0, 0]}
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

    </div>
  )
}

export default Reports