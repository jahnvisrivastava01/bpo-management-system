const Performance = () => {
  const employees = [
    {
      id: 'E001',
      name: 'Priya Sharma',
      role: 'Agent',
      department: 'Customer Support',
      callsHandled: 320,
      resolved: 300,
      rating: 4.5,
      feedback: 'Excellent communication skills',
    },
    {
      id: 'E002',
      name: 'Rahul Verma',
      role: 'Team Leader',
      department: 'Technical Support',
      callsHandled: 210,
      resolved: 198,
      rating: 4.8,
      feedback: 'Strong leadership and management',
    },
    {
      id: 'E003',
      name: 'Sneha Patil',
      role: 'Agent',
      department: 'Sales',
      callsHandled: 280,
      resolved: 250,
      rating: 4.2,
      feedback: 'Good customer handling',
    },
  ]

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">
          Performance Management
        </h1>

        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Generate Report
        </button>
      </div>

      <div className="grid grid-cols-3 gap-5">
        {employees.map((emp) => (
          <div
            key={emp.id}
            className="bg-white rounded-xl shadow-md p-5"
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-xl font-semibold">
                  {emp.name}
                </h2>

                <p className="text-gray-500 text-sm">
                  {emp.role}
                </p>
              </div>

              <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                {emp.id}
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-500">
                  Department
                </span>

                <span className="font-medium">
                  {emp.department}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500">
                  Calls Handled
                </span>

                <span className="font-medium">
                  {emp.callsHandled}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500">
                  Resolved
                </span>

                <span className="font-medium text-green-600">
                  {emp.resolved}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500">
                  Rating
                </span>

                <span className="font-bold text-yellow-500">
                  ⭐ {emp.rating}
                </span>
              </div>
            </div>

            <div className="mt-5">
              <p className="text-sm text-gray-500 mb-1">
                Feedback
              </p>

              <div className="bg-gray-100 p-3 rounded-lg text-sm">
                {emp.feedback}
              </div>
            </div>

            <div className="mt-5 flex gap-3">
              <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                View Details
              </button>

              <button className="flex-1 border border-gray-300 py-2 rounded-lg hover:bg-gray-100">
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Performance