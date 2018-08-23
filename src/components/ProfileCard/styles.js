import {StyleSheet } from 'react-native';

import {fonts, colors} from '../../constants/styles';

export default StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'nowrap',
    marginLeft: 20
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 100
  },
  nicknameContainer: {
    flexDirection: 'column',
    marginLeft: 20
  },
  nicknameTitle: {
    color: colors.grey,
    fontFamily: fonts.family.light,
    marginBottom: 5
  },
  nickname: {
    fontSize: fonts.size.large,
    fontWeight: fonts.weight.large
  }
});
