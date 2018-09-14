import {StyleSheet } from 'react-native';

import {fonts, colors} from '../../../constants/styles';

export default StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginLeft: 20,
    marginRight: 20,
    height: 50,
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: colors.grey,
  },
  title: {
    ...fonts.weight.light,
    color: colors.grey,
    fontSize: fonts.size.xsmall
  },
  input: {
    fontSize: fonts.size.large,
    padding: 0
  }
});
