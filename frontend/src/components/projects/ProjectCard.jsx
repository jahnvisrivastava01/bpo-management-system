const ProjectCard = ({ project }) => {
  return (
    <div className='bg-white rounded-xl shadow-md p-5'>
      <div className='flex justify-between items-center mb-4'>
        <h2 className='text-xl font-bold'>
          {project.name}
        </h2>

        <span
          className={`px-3 py-1 rounded-full text-sm ${
            project.status === 'Active'
              ? 'bg-green-100 text-green-700'
              : 'bg-gray-200 text-gray-700'
          }`}
        >
          {project.status}
        </span>
      </div>

      <div className='space-y-3'>
        <p>
          <span className='font-semibold'>
            Project ID:
          </span>{' '}
          {project.id}
        </p>

        <p>
          <span className='font-semibold'>
            Client:
          </span>{' '}
          {project.client}
        </p>

        <p>
          <span className='font-semibold'>
            Deadline:
          </span>{' '}
          {project.deadline}
        </p>

        <p className='text-gray-600'>
          {project.description}
        </p>
      </div>

      <div className='flex gap-3 mt-5'>
        <button className='flex-1 bg-blue-600 text-white py-2 rounded-lg'>
          View
        </button>

        <button className='flex-1 border border-gray-300 py-2 rounded-lg'>
          Edit
        </button>
      </div>
    </div>
  )
}

export default ProjectCard