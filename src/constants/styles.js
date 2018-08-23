import Platform from 'Platform';

export const colors = {
  black: '#000',
  white: '#fff',
  grey: '#9B9B9B',
  primary: '#774E9C',
  secondary: '',
  tertiary: '',
};

export const fonts = {
  size: {
    small: 13,
    medium: 15,
    large: 17,
    xlarge: 19,
  },
  weight: {
    light: Platform.OS === 'ios' ? {fontWeight: '300'} : {fontFamily: 'sans-serif-light'},
    regular: {fontWeight: '400'},
    medium: {fontWeight: '500'},
    bold: {fontWeight: 'bold'}
  }
};
