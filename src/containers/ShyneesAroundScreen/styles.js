import Platform from 'Platform';
import {StyleSheet } from 'react-native';

import {fonts, colors} from '../../constants/styles';

export default StyleSheet.create({
  headerContainer: {
    flex: 1,
    backgroundColor: colors.white
  },
  titleContainer: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 32 : 12,
  },
  title: {
    ...fonts.weight.medium,
    fontSize: fonts.size.medium,
    textAlign: 'center'
  }
});
