import axios from axios

import httpClient from '../httpclient';

const END_POINT = ' /auth/local'

export const login = ({ username, password }) => {
  return httpClient({
    url: END_POINT,
    method: 'post',
    headers: {
      // "X-CSRF-TOKEN": getCookie('csrf_token')
    },
    data: {
      username, password
    }
  });
}

export const register = ({ username, password }) => {
  return httpClient({
    url: '/register',
    method: 'post',
    headers: {
      // "X-CSRF-TOKEN": getCookie('csrf_token')
    },
    data: {
      username, password
    }
  });
}