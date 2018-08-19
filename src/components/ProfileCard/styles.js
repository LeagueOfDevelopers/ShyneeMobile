import {StyleSheet } from 'react-native';

import {grey, ff_light, fs_xlarge, fw_large} from '../../constants/styles';

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
  nickname: {
    color: grey,
    fontFamily: ff_light,
    marginBottom: 5
  },
  name: {
    fontSize: fs_xlarge,
    fontWeight: fw_large
  }
});
