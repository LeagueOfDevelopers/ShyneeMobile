import {StyleSheet } from 'react-native';

import {fonts, colors} from '../../../constants/styles';

export default StyleSheet.create({
  shyneeСell: {
    padding: 1,
  },
  avatarContainer: {
    height: '100%',
    width: '100%',
    overflow: 'hidden',
    position: 'relative',
  },
  blackout: {
    position: 'absolute',
    backgroundColor: colors.black,
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
    ...fonts.weight.medium,
    fontSize: fonts.size.large,
    color: colors.white,
    textAlign: 'center',
  }
});
