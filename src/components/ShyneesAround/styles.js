import {StyleSheet } from 'react-native';

import {fonts, colors} from '../../constants/styles';

export default StyleSheet.create({
  background: {
    backgroundColor: colors.white,
    zIndex: -1
  },
  descriptionContainer: {
    alignItems: 'center'
  },
  description: {
    ...fonts.weight.light,
    fontSize: fonts.size.xsmall,
    maxWidth: 235,
    textAlign: 'center'
  },
  shyneesAroundContainer: {
    flexWrap: 'wrap',
    flexDirection:'row',
    justifyContent: 'center',
    marginLeft: 15,
    marginRight: 15,
    marginTop: 80
  },
  shyneeNickname: {
    fontSize: 36
  }
});
