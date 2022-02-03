import axios from 'axios';

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
