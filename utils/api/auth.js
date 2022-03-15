import axios from axios

import httpClient from '../httpclient';


export const login = ({ username, password }) => {
  return httpClient({
    url: '/login',
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