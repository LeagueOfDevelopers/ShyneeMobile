import { Platform } from 'react-native';

export const colors = {
  black: '#000',
  white: '#fff',
  grey: '#9B9B9B',
  lightGrey: '#BCBBC1',
  primary: '#774E9C',
  secondary: '',
  tertiary: '',
  error: '#C3646F'
};

export const fonts = {
  size: {
    xsmall: 13,
    small: 15,
    medium: 17,
    large: 19,
  },
  weight: {
    light: Platform.OS === 'ios' ? {fontWeight: '300'} : {fontFamily: 'sans-serif-light'},
    regular: {fontWeight: '400'},
    medium: Platform.OS === 'ios' ? {fontWeight: '500'} : {fontFamily: 'sans-serif-medium'},
    bold: {fontWeight: 'bold'}
  }
};
