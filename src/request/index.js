const host = '85.143.104.47:19902';

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
