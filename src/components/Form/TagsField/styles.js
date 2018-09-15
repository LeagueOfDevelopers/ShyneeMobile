import {StyleSheet } from 'react-native';

import {fonts, colors} from '../../../constants/styles';

export default StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  title: {
    ...fonts.weight.light,
    color: colors.grey,
    fontSize: fonts.size.xsmall,
    marginBottom: 5
  },
  tabStyle: {
    borderColor: colors.primary
  },
  tabTextStyle: {
    color: colors.primary,
    fontSize: fonts.xsmall
  },
  activeTabStyle: {
    backgroundColor: colors.primary
  },
  activeTabTextStyle: {
    color: colors.white
  }
});
