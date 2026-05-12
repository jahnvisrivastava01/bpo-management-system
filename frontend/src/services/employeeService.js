import axios from 'axios'

const API = axios.create({
  baseURL: 'http://127.0.0.1:5000',
})

export const getEmployees = () =>
  API.get('/employees')

export const addEmployee = (employeeData) =>
  API.post('/employees', employeeData)

export const deleteEmployee = (id) =>
  API.delete(`/employees/${id}`)

export const getEmployeeCount = () =>
  API.get('/employees/count')