import { useState } from 'react'

const TicketForm = ({
  tickets,
  setTickets,
  setShowForm,
}) => {
  const [form, setForm] = useState({
    id: '',
    subject: '',
    customer: '',
    priority: 'Medium',
    status: 'Open',
    assignedTo: '',
    description: '',
  })

  const handleSubmit = () => {
    setTickets([...tickets, form])
    setShowForm(false)
  }

  return (
    <div className='bg-white p-5 rounded-xl shadow mb-5'>
      <div className='grid grid-cols-2 gap-4'>
        <input
          placeholder='Ticket ID'
          className='border p-2 rounded'
          onChange={(e) =>
            setForm({
              ...form,
              id: e.target.value,
            })
          }
        />

        <input
          placeholder='Subject'
          className='border p-2 rounded'
          onChange={(e) =>
            setForm({
              ...form,
              subject: e.target.value,
            })
          }
        />

        <input
          placeholder='Customer Name'
          className='border p-2 rounded'
          onChange={(e) =>
            setForm({
              ...form,
              customer: e.target.value,
            })
          }
        />

        <input
          placeholder='Assigned Employee'
          className='border p-2 rounded'
          onChange={(e) =>
            setForm({
              ...form,
              assignedTo: e.target.value,
            })
          }
        />

        <select
          className='border p-2 rounded'
          onChange={(e) =>
            setForm({
              ...form,
              priority: e.target.value,
            })
          }
        >
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
          <option>Critical</option>
        </select>

        <select
          className='border p-2 rounded'
          onChange={(e) =>
            setForm({
              ...form,
              status: e.target.value,
            })
          }
        >
          <option>Open</option>
          <option>In Progress</option>
          <option>Resolved</option>
        </select>
      </div>

      <textarea
        placeholder='Issue Description'
        className='border p-2 rounded w-full mt-4'
        rows='4'
        onChange={(e) =>
          setForm({
            ...form,
            description: e.target.value,
          })
        }
      />

      <button
        onClick={handleSubmit}
        className='bg-green-600 text-white px-4 py-2 rounded-lg mt-4'
      >
        Save Ticket
      </button>
    </div>
  )
}

export default TicketForm