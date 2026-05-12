import { useState } from 'react'

import {
  addProject,
} from '../../services/projectService'

const ProjectForm = ({
  fetchProjects,
  setShowForm,
}) => {

  const [form, setForm] = useState({
    project_code: '',
    name: '',
    client: '',
    deadline: '',
    status: 'Active',
    description: '',
  })

  const handleSubmit = async () => {

    try {

      await addProject(form)

      fetchProjects()

      setShowForm(false)

    } catch (error) {

      console.log(error)
    }
  }

  return (
    <div className='bg-white p-5 rounded-xl shadow mb-5'>

      <div className='grid grid-cols-2 gap-4'>

        <input
          placeholder='Project Code'
          className='border p-2 rounded'
          onChange={(e) =>
            setForm({
              ...form,
              project_code: e.target.value,
            })
          }
        />

        <input
          placeholder='Project Name'
          className='border p-2 rounded'
          onChange={(e) =>
            setForm({
              ...form,
              name: e.target.value,
            })
          }
        />

        <input
          placeholder='Client Name'
          className='border p-2 rounded'
          onChange={(e) =>
            setForm({
              ...form,
              client: e.target.value,
            })
          }
        />

        <input
          type='date'
          className='border p-2 rounded'
          onChange={(e) =>
            setForm({
              ...form,
              deadline: e.target.value,
            })
          }
        />

      </div>

      <textarea
        placeholder='Description'
        rows='4'
        className='border p-2 rounded w-full mt-4'
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
        Save Project
      </button>

    </div>
  )
}

export default ProjectForm