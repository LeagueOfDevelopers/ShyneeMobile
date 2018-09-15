import {StyleSheet } from 'react-native';

import {fonts, colors} from '../../../constants/styles';

export default StyleSheet.create({
  container: {
    flexDirection: 'column',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: colors.grey,
  },
  title: {
    ...fonts.weight.light,
    color: colors.grey,
    fontSize: fonts.size.xsmall,
    marginBottom: 5
  },
  tagContainerStyle: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: colors.grey,
    borderRadius: 100,
    paddingTop: 13,
    paddingBottom: 13,
    paddingLeft: 13,
    marginRight: 8
  },
  tagTextStyle: {
    fontSize: fonts.size.small,
  }
});
