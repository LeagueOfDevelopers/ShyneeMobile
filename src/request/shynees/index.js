import request from '../index';

export const getShyneesAroundRequest = () => 
  request('/shynees/around')
    .then(data => data.json());

export const getShyneeProfileRequest = (id) => {
  return request(`/shynees/${id}`)
    .then(data => data.json());
};

export const getShyneeSettingsRequest = (id) => {
  return request(`/shynees/${id}/settings`)
    .then(data => data.json());
};
