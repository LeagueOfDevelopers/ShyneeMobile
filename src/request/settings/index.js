import request from '../index';

export const getSettingsRequest = () => 
  request('kek')
    .then(()=>{
      return {kek:1};
    });
