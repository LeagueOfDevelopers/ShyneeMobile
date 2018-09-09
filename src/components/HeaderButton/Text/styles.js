import {StyleSheet } from 'react-native';

import {fonts, colors} from '../../constants/styles';

export default StyleSheet.create({
  button: {
    height: '100%',
    paddingLeft: 20,
    paddingRight: 20
  },
  buttonText: {
    fontSize: fonts.size.large,
    color: colors.primary,
  }
});
