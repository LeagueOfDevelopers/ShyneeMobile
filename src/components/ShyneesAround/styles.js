import {StyleSheet } from 'react-native';

import {fonts, colors} from '../../constants/styles';

export default StyleSheet.create({
  background: {
    backgroundColor: colors.white
  },
  descriptionContainer: {
    alignItems: 'center'
  },
  description: {
    ...fonts.weight.light,
    fontSize: fonts.size.small,
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
