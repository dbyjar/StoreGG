import Cookies from 'js-cookie'
import axios, { AxiosRequestConfig } from 'axios'

interface baseAPIRequestTypes extends AxiosRequestConfig {
  token?: boolean
  serverToken?: string
}

export default async function baseAPIRequest({
  url, method, data, token, serverToken,
}: baseAPIRequestTypes) {
  let headers = {}

  if (serverToken) {
    headers = {
      Authorization: `Bearer ${serverToken}`,
    }
  } else if (token) {
    const tokenCookies = Cookies.get('uglyTokenGG')
    
    if (tokenCookies) {
      const jwtToken = atob(tokenCookies)
      headers = {
        Authorization: `Bearer ${jwtToken}`,
      }
    }
  }

  const response = await axios({
    url, method, data, headers,
  }).catch((err) => {
    return err.response
  })

  if (response.status > 300) {
    const res = {
      error: true,
      message: response.data.message,
      data: null,
    }

    return res
  }

  const { length } = Object.keys(response.data)

  const res = {
    error: false,
    message: 'success',
    data: length > 1
      ? response.data
      : response.data.data,
  }

  return res
}
