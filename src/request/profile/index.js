import request from '../index';

export const getShyneeProfileRequest = (id) => {
  return request(`/shynees/${id}`)
    .then(data => data.json());
};
