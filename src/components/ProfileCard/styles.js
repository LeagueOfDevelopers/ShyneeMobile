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
    ...fonts.weight.light,
    color: colors.grey,
    marginBottom: 5
  },
  nickname: {
    ...fonts.weight.bold,
    fontSize: fonts.size.medium,
  }
});
