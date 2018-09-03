import request from '../index';

export const getShyneesAroundRequest = () => 
  request('/shynees/around')
    .then(data => data.json());

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
