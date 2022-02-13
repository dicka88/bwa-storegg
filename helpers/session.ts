import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';
import { UserTypes } from '../services/dataTypes';

export function getUserCookie() {
  const token = Cookies.get('token');

  if (!token) return null;

  const jwtToken = window.atob(token);

  const payload: UserTypes = jwtDecode(jwtToken);

  return payload;
}

export function getUserCookieNode(token: string) {
  const jwtToken = Buffer.from(token, 'base64').toString('ascii');
  const payload: UserTypes = jwtDecode(jwtToken);

  return payload;
}
