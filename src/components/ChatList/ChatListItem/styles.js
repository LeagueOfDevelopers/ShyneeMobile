import { StyleSheet } from 'react-native';

import { fonts, colors } from '../../../constants/styles';

export default StyleSheet.create({
  container: {
    paddingVertical: 8,
    paddingRight: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: '#bcbbc1',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  avatarContainer: {
    paddingVertical: 8,
    paddingRight: 12,  
  },
  avatar: {
    height: 45,
    width: 45,
    borderRadius: 45/2
  },
  content: {
    flex: 1
  },
  nickname: {
    fontSize: fonts.size.medium,
    lineHeight: 22,
    color: colors.black,
    ...fonts.weight.bold
  },
  lastMessage: {
    lineHeight: 18,
    minHeight: 36,
    fontSize: fonts.size.small,
    color: colors.grey
  },
  time: {
    flexBasis: 40,
    alignSelf: 'flex-start',
    color: colors.grey,
    fontSize: fonts.size.xsmall,
    lineHeight: 22,
  }
});