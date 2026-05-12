const TicketCard = ({ ticket }) => {
  const priorityColor = () => {
    switch (ticket.priority) {
      case 'Critical':
        return 'bg-red-100 text-red-700'

      case 'High':
        return 'bg-yellow-100 text-yellow-700'

      case 'Medium':
        return 'bg-blue-100 text-blue-700'

      default:
        return 'bg-gray-100 text-gray-700'
    }
  }

  const statusColor = () => {
    switch (ticket.status) {
      case 'Open':
        return 'bg-red-100 text-red-700'

      case 'In Progress':
        return 'bg-yellow-100 text-yellow-700'

      case 'Resolved':
        return 'bg-green-100 text-green-700'

      default:
        return 'bg-gray-100 text-gray-700'
    }
  }

  return (
    <div className='bg-white rounded-xl shadow-md p-5'>
      <div className='flex justify-between items-center mb-4'>
        <h2 className='text-xl font-bold'>
          {ticket.subject}
        </h2>

        <span
          className={`px-3 py-1 rounded-full text-sm ${priorityColor()}`}
        >
          {ticket.priority}
        </span>
      </div>

      <div className='space-y-3'>
        <p>
          <span className='font-semibold'>
            Ticket ID:
          </span>{' '}
          {ticket.id}
        </p>

        <p>
          <span className='font-semibold'>
            Customer:
          </span>{' '}
          {ticket.customer}
        </p>

        <p>
          <span className='font-semibold'>
            Assigned To:
          </span>{' '}
          {ticket.assignedTo}
        </p>

        <div>
          <span
            className={`px-3 py-1 rounded-full text-sm ${statusColor()}`}
          >
            {ticket.status}
          </span>
        </div>

        <p className='text-gray-600'>
          {ticket.description}
        </p>
      </div>

      <div className='flex gap-3 mt-5'>
        <button className='flex-1 bg-blue-600 text-white py-2 rounded-lg'>
          View
        </button>

        <button className='flex-1 border border-gray-300 py-2 rounded-lg'>
          Resolve
        </button>
      </div>
    </div>
  )
}

export default TicketCard