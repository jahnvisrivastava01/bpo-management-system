import axios from 'axios'

const API = axios.create({
  baseURL: 'https://bpo-management-system-b4rl.onrender.com',
})

export const getProjects = () =>
  API.get('/projects')

export const addProject = (projectData) =>
  API.post('/projects', projectData)