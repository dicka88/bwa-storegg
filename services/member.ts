import { ROOT_API } from '.';
import callApi from '../config/axios';

export async function getOverview() {
  const result = await callApi({
    method: 'GET',
    withToken: true,
    url: `${ROOT_API}/api/v1/player/dashboard`,
  });

  return result.data;
}

export async function getTransactions(status: 'all' | 'pending' | 'success' | 'failed') {
  let query = '';

  if (status !== 'all') {
    query = `?status=${status}`;
  }

  const response = await callApi({
    method: 'GET',
    url: `${ROOT_API}/api/v1/player/history${query}`,
    withToken: true,
  });

  return response.data;
}

export async function getTransactionDetail(token: string, id: string) {
  const response = await callApi({
    method: 'GET',
    url: `${ROOT_API}/api/v1/player/history/${id}/detail`,
    serverToken: token,
  });

  return response.data;
}

export async function updateProfile(data: FormData) {
  const response = await callApi({
    method: 'PUT',
    url: `${ROOT_API}/api/v1/player/profile`,
    data,
    withToken: true,
  });

  return response.data;
}
