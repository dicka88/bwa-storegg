import axios, { AxiosRequestConfig } from 'axios';
import Cookie from 'js-cookie';

interface CallApiProps extends AxiosRequestConfig {
  withToken?: boolean,
  serverToken?: string
}

export default async function callApi({
  url, method, data, withToken, serverToken,
}: CallApiProps) {
  let headers = {};

  if (withToken) {
    let jwtToken = '';
    const token = Cookie.get('token');

    if (token) {
      jwtToken = window.atob(token);
      headers = {
        Authorization: `Bearer ${jwtToken}`,
      };
    }
  }

  if (serverToken) {
    const token = Buffer.from(serverToken, 'base64').toString('ascii');
    if (token) {
      headers = {
        Authorization: `Bearer ${token}`,
      };
    }
  }

  const res = await axios({
    url, method, data, headers,
  });

  return res;
}
