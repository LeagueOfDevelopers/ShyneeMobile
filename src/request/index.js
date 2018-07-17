const request = (requestUrl, params = {}) => {
  const {
    method = 'GET',
    headers= {},
    body = null
  } = params;

  const reqParams = {};
  return fetch(requestUrl, reqParams);
};

export default request;
