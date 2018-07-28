import {StyleSheet } from 'react-native';

import {f_medium, white, black} from '../../../constants/styles';

export default StyleSheet.create({
  sheneeСell: {
    padding: 6,
  },
  avatarContainer: {
    height: '100%',
    width: '100%',
    borderRadius: 5,
    overflow: 'hidden',
    position: 'relative',
  },
  blackout: {
    position: 'absolute',
    backgroundColor: black,
    height: '100%',
    width: '100%',
    opacity: 0.3,
    zIndex: 1,
  },
  avatar: {
    flex:1,
    height: undefined,
    width: undefined
  },
  nicknameContainer: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
  },
  nickname: {
    ...f_medium,
    color: white,
    textAlign: 'center',
  }
});
