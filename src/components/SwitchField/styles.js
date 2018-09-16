import {StyleSheet } from 'react-native';

import {fonts, colors} from '../../constants/styles';

export default StyleSheet.create({
  profileDataContainer: {
    backgroundColor: colors.white,
    flexWrap: 'nowrap',
    flexDirection: 'row',
  },
  profileDataTitle: {
    flex: 1,
    textAlign: 'left',
    fontSize: fonts.size.medium
  }
});
