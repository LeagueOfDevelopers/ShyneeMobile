import {StyleSheet } from 'react-native';

import {fonts, colors} from '../../constants/styles';

export default StyleSheet.create({
  profileDataContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'nowrap',
    backgroundColor: colors.white,
    height: 44,
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderColor: colors.lightGrey,
    paddingLeft: 20,
    paddingRight: 20
  },
  profileDataTitle: {
    flex: 1,
    textAlign: 'left',
    fontSize: fonts.size.medium
  }
});
