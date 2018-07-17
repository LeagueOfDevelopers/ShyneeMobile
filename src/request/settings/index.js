import request from '../index';

export const getSettingsRequest = () => 
  request('kek')
    .then(()=>{
      return new Promise(resolve => setTimeout(() => resolve(), 3000));
    });
