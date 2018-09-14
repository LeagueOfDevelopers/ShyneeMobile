import request from '../index';

export const getShyneesAroundRequest = () => {
  const params = {
    method: 'PUT',
  };
  return request('/shynees/around?latitude=1&longitude=1', params)
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
