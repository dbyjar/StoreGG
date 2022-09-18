import baseURL from '../index'
import baseAPIRequest from '../config';

const prefixURL = 'api/auth'

interface signInTypes {
  email: string;
  password: string;
}

export const signUp = async (formData: FormData) => {
  return baseAPIRequest({
    url: `${baseURL}/${prefixURL}/signup`,
    method: 'POST',
    data: formData,
  })
}

export const signIn = async (formData: signInTypes) => {
  return baseAPIRequest({
    url: `${baseURL}/${prefixURL}/signin`,
    method: 'POST',
    data: formData,
  })
}
