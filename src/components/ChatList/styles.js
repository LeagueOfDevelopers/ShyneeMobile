import { StyleSheet } from 'react-native';

import { fonts, colors } from '../../constants/styles';

export default StyleSheet.create({
  container: {
    marginTop: 2,
    backgroundColor: colors.white,
    flex: 1
  },
  list: {
    paddingLeft: 24,
    paddingTop: 8
  },
  separator: {
    flex: 1,
    height: 0.5,
    maxHeight: 0.5,
    backgroundColor: colors.grey
  }
});