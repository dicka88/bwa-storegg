import axios, { AxiosRequestConfig } from 'axios';
import Cookie from 'js-cookie';

interface CallApiProps extends AxiosRequestConfig {
  withToken?: boolean
}

export default async function callApi({
  url, method, data, withToken,
}: CallApiProps) {
  let headers = {};

  if (withToken) {
    const token = Cookie.get('token');

    if (token) {
      const jwtToken = window.atob(token);

      headers = {
        Authorization: `Bearer ${jwtToken}`,
      };
    }
  }

  const res = await axios({
    url, method, data, headers,
  });

  return res;
}
