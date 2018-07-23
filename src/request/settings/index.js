import request from '../index';

export const getSettingsRequest = () => 
  request('/shynees/around')
    .then((data)=>{
      return data;
    });
