import {StyleSheet } from 'react-native';

import {f_large, primaryColor, white, black} from '../../constants/styles';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: black,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    shadowOpacity: 0.16
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
    paddingLeft: 30,
    paddingRight: 30,
    color: white,
    flexBasis: 0
  }
});
