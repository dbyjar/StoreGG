import axios from 'axios'
import baseURL from '../index'

const prefixURL = 'api/auth'

export const signUp = async (formData: any) => {
  const data = (
    await axios.post(`${baseURL}/${prefixURL}/signup`, formData)
  ).response ?? {}

  return data
}

export const getDetailVoucher = async () => {
  return null
}
