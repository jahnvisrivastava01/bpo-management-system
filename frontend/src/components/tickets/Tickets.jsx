import { useState } from 'react'
import TicketCard from './TicketCard'
import TicketForm from './TicketForm'

const initialTickets = [
  {
    id: 'T001',
    subject: 'Login Issue',
    customer: 'Rahul Sharma',
    priority: 'High',
    status: 'Open',
    assignedTo: 'Priya Sharma',
    description: 'Customer unable to login to portal',
  },

  {
    id: 'T002',
    subject: 'Payment Failed',
    customer: 'Aman Gupta',
    priority: 'Critical',
    status: 'In Progress',
    assignedTo: 'Rahul Verma',
    description: 'Transaction getting declined repeatedly',
  },

  {
    id: 'T003',
    subject: 'Report Download Error',
    customer: 'Sneha Jain',
    priority: 'Medium',
    status: 'Resolved',
    assignedTo: 'Sneha Patil',
    description: 'PDF reports are not downloading',
  },
]

const Tickets = () => {
  const [tickets, setTickets] = useState(initialTickets)
  const [showForm, setShowForm] = useState(false)

  return (
    <div>
      <div className='flex justify-between items-center mb-6'>
        <h1 className='text-3xl font-bold'>
          Ticket Management
        </h1>

        <button
          onClick={() => setShowForm(true)}
          className='bg-blue-600 text-white px-4 py-2 rounded-lg'
        >
          Create Ticket
        </button>
      </div>

      {showForm && (
        <TicketForm
          tickets={tickets}
          setTickets={setTickets}
          setShowForm={setShowForm}
        />
      )}

      <div className='grid grid-cols-3 gap-5'>
        {tickets.map((ticket) => (
          <TicketCard
            key={ticket.id}
            ticket={ticket}
          />
        ))}
      </div>
    </div>
  )
}

export default Tickets