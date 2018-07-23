import request from '../index';

export const getShyneesAroundRequest = () => 
  request('/shynees/around')
    .then(data => data.json());
