import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 10000,
})

export type IJobs = {
  id: number
  title: string
  type: string
  description: string
  location: string
  salary: string
  company: ICompany
}

export type ICompany = {
  name: string
  description: string
  contactEmail: string
  contactPhone: string
}

export const fetchJobs = (): Promise<{ data: IJobs[] }> => {
  return axiosInstance.get('/jobs')
}

export const fetchJobsById = (id: number | string): Promise<{ data: IJobs }> => {
  return axiosInstance.get(`/jobs/${id}`)
}

export const fetchCreateJob = (param: Omit<IJobs, 'id'>): Promise<{ data: IJobs }> => {
  return axiosInstance.post('/jobs', param)
}

export const fetchDeleteJobsById = (id: number | string): Promise<{ data: IJobs }> => {
  return axiosInstance.delete(`/jobs/${id}`)
}

export default axiosInstance
