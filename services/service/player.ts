import axios from 'axios'
import baseURL from '../index'

const prefixURL = 'api/player'

export const getFeaturedGame = async () => {
  const { data } = (
    await axios.get(`${baseURL}/${prefixURL}`)
  ).data ?? []

  return data
}

export const getDetailVoucher = async (id: string) => {
  const { data } = (
    await axios.get(`${baseURL}/${prefixURL}/detail/${id}`)
  ).data ?? []

  return data
}
