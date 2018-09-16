const host = 'http://85.143.104.47:19902';

const request = (path, params = {}) => {
  const requestUrl = host + path;
  const {
    method = 'GET',
    headers = {
      'Content-Type': 'application/json'
    },
    body = null
  } = params;

  const reqParams = {
    method,
    headers,
    body
  };
  return fetch(requestUrl, reqParams);
};

export default request;
