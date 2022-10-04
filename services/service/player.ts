import axios from 'axios'
import baseURL from '../index'
import baseAPIRequest from '../config';

const prefixURL = 'api/player'

interface CheckoutDataTypes {
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

export const checkout = (formData: CheckoutDataTypes) => {
  return baseAPIRequest({
    url: `${baseURL}/${prefixURL}/checkout`,
    method: 'POST',
    data: formData,
    token: true,
  })
}

export const getMemberOverview = () => {
  return baseAPIRequest({
    url: `${baseURL}/${prefixURL}/dashboard`,
    method: 'get',
    token: true,
  })
}

export const getTransactionOverview = (params: string) => {
  const url = (params === 'all' || !params)
    ? `${baseURL}/${prefixURL}/history`
    : `${baseURL}/${prefixURL}/history?status=${params}`

  return baseAPIRequest({
    url,
    method: 'get',
    token: true,
  })
}

export const getTransactionDetail = (id: string, token: string) => {
  return baseAPIRequest({
    url: `${baseURL}/${prefixURL}/history/${id}`,
    method: 'get',
    serverToken: token,
  })
}

export const updateProfile = (formData: FormData) => {
  return baseAPIRequest({
    url: `${baseURL}/${prefixURL}/profile`,
    method: 'put',
    data: formData,
    token: true,
  })
}
