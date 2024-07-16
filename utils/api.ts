import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000',
  timeout: 5000, // Timeout if necessary
  headers: {
    'Content-Type': 'application/json',
    // Add all custom headers here
  },
  // withCredentials: true,
})

interface FetchDataOptions extends AxiosRequestConfig {}

const fetchData = async <T>(
  url: string,
  options: FetchDataOptions = {}
): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await axiosInstance(url, options)
    return response.data
  } catch (error) {
    console.error('Error retrieving data:', error)
    throw new Error('Could not get data')
  }
}

export { axiosInstance, fetchData }
