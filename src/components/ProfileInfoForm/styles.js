import {StyleSheet } from 'react-native';

import {fonts} from '../../constants/styles';

export default StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'nowrap',
    marginLeft: 20,
    marginTop: 8
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 100
  },
  nickname: {
    ...fonts.weight.bold,
    fontSize: fonts.size.medium,
  },
  textField: {
    marginTop: 20
  }
});
