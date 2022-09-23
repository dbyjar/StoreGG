import axios from 'axios'
import baseURL from '../index'
import baseAPIRequest from '../config';

const prefixURL = 'api/player'

interface checkoutTypes {
  name: string
  accountUser: string
  voucher: string
  nominal: string
  bank: string
  payment: string
}

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

export const getCategories = async () => {
  const { data } = (
    await axios.get(`${baseURL}/${prefixURL}/category`)
  ).data ?? []

  return data
}

export const checkout = async (formData: checkoutTypes) => {
  return baseAPIRequest({
    url: `${baseURL}/${prefixURL}/checkout`,
    method: 'POST',
    data: formData,
    token: true,
  })
}
