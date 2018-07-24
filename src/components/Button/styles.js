import {StyleSheet } from 'react-native';

import {f_large, primaryColor, white} from '../../constants/styles';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: primaryColor,
    borderRadius: 200,
  },
  text: {
    ...f_large,
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    color: white,
    flexBasis: 0
  }
});
