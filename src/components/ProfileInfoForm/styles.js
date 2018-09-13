import {StyleSheet } from 'react-native';

export default StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'nowrap',
    marginLeft: 20,
    marginTop: 16
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 100
  },
  nickname: {
    flexGrow: 1
  },
  textField: {
    marginTop: 20
  }
});
