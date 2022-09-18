import axios from 'axios'
import baseURL from '../index'

const prefixURL = 'api/auth'

export const signUp = async (formData: any) => {
  const { data } = await axios.post(`${baseURL}/${prefixURL}/signup`, formData)
    .catch((error) => {
      return error.response
    })
  
  const responseData = data
  return responseData?.errors ? responseData : responseData.data
}

export const signIn = async () => {
  return null
}
