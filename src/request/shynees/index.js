import request from '../index';

export const getShyneesAroundRequest = () => {
  const params = {
    method: 'PUT',
    body: JSON.stringify({
      latitude: 100,
      longitude: 100
    })
  };
  return request('/shynees/around', params)
    .then(data => data.json());
};

export const getShyneeInfoRequest = (id) => {
  return request(`/shynees/${id}`)
    .then(data => data.json());
};

export const getShyneeSettingsRequest = (id) => {
  return request(`/shynees/${id}/settings`)
    .then(data => data.json());
};

export const setShyneeReady = (id, isReady) => {
  const params = {
    method: 'POST'
  };
  return request(`/shynees/${id}/ready/${isReady}`, params)
    .then(data => data.json());
};

export const signShyneeUp = async (email, password) => {
  const params = {
    method: 'POST',
    body: JSON.stringify({
      email,
      password
    })
  };

  const response = await request('/shynees', params);
  const validationError = response.status === 400;
  const alreadyExistError = response.status === 409;
  const data = response.ok || validationError
    ? await response.json()
    : await response.text();
  return {
    error: !response.ok,
    validationError,
    alreadyExistError,
    data
  };
};
