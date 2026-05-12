import axios from 'axios'

const API = axios.create({
  baseURL: 'https://bpo-management-system-b4rl.onrender.com',
})

export const getEmployees = () =>
  API.get('/employees')

export const addEmployee = (employeeData) =>
  API.post('/employees', employeeData)

export const deleteEmployee = (id) =>
  API.delete(`/employees/${id}`)

export const getEmployeeCount = () =>
  API.get('/employees/count')