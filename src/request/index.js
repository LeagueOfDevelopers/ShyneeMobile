const host = 'http://10.0.2.2:60381';

const request = (path, params = {}) => {
  const requestUrl = host + path;
  let {
    method = 'GET',
    headers = {},
    body = null,
    token
  } = params;

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  headers = {
    'Content-Type': 'application/json',
    ...headers,
  };

  const reqParams = {
    method,
    headers,
    body
  };
  return fetch(requestUrl, reqParams);
};

export default request;
