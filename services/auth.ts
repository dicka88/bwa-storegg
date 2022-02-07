import axios from 'axios';

export interface SigninTypes {
  email: string,
  password: string
}

export async function signup(data: FormData) {
  const result = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/signup`, data);

  return result.data;
}

export async function signin(data: SigninTypes) {
  const result = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/signin`, data);

  return result.data;
}
