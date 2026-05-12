import { useEffect, useState } from 'react'

import ProjectCard from './ProjectCard'
import ProjectForm from './ProjectForm'

import {
  getProjects,
} from '../../services/projectService'

const Projects = () => {

  const [projects, setProjects] =
    useState([])

  const [showForm, setShowForm] =
    useState(false)

  const fetchProjects = async () => {

    try {

      const response =
        await getProjects()

      setProjects(response.data)

    } catch (error) {

      console.log(error)
    }
  }

  useEffect(() => {

    fetchProjects()

  }, [])

  return (
    <div>

      <div className='flex justify-between items-center mb-6'>

        <h1 className='text-3xl font-bold'>
          Projects
        </h1>

        <button
          onClick={() => setShowForm(true)}
          className='bg-blue-600 text-white px-4 py-2 rounded-lg'
        >
          Add Project
        </button>

      </div>

      {showForm && (
        <ProjectForm
          fetchProjects={fetchProjects}
          setShowForm={setShowForm}
        />
      )}

      <div className='grid grid-cols-3 gap-5'>

        {projects.map((project) => (

          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}

      </div>
    </div>
  )
}

export default Projects