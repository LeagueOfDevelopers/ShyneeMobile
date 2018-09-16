import { AsyncStorage } from 'react-native';

const USER_CREDENTIALS = 'USER_CREDENTIALS';
export const getUserCredentials = () => {
  return AsyncStorage.getItem(USER_CREDENTIALS)
    .then(item => JSON.parse(item));
};

export const persistUserCredentials = ({id, token}) => {
  const item = JSON.stringify({id, token});
  return AsyncStorage.setItem(USER_CREDENTIALS, item);
};

export const removeUserCredentials = () => AsyncStorage.removeItem(USER_CREDENTIALS);