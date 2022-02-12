import axios from 'axios';
import callApi from '../config/axios';
import { CheckoutTypes } from './dataTypes';

const ROOT_API = process.env.NEXT_PUBLIC_API_URL;

export async function getFeatureGame() {
  const response = await axios.get(`${ROOT_API}/api/v1/player/landingpage`);
  const axiosResponse = response.data;

  return axiosResponse.data;
}

export async function getVoucher(id: string) {
  const response = await axios.get(`${ROOT_API}/api/v1/player/detail/${id}`);
  const axiosResponse = response.data;

  return axiosResponse;
}

export async function getCategory() {
  const response = await axios.get(`${ROOT_API}/api/v1/player/category`);
  return response.data;
}

export async function postCheckout(data: CheckoutTypes) {
  const response = await callApi({
    method: 'POST',
    url: `${ROOT_API}/api/v1/player/checkout`,
    data,
    withToken: true,
  });

  return response.data;
}
