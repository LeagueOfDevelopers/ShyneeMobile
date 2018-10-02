import {StyleSheet } from 'react-native';

import {fonts, colors} from '../../constants/styles';

export default StyleSheet.create({
  profileDataContainer: {
    marginTop: 30
  },
  profileDataTitleContainer: {
    flexWrap: 'nowrap',
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 4
  },
  profileDataTitle: {
    flex: 1,
    color: colors.grey,
    fontSize: fonts.size.medium
  },
  allPublic: {
    marginTop: 30
  },
  prompt: {
    fontSize: fonts.size.xsmall,
    color: colors.grey,
    marginTop: 12,
    marginLeft: 16,
    marginRight: 38
  }
});
