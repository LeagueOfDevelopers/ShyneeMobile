import { StyleSheet } from 'react-native';

import { colors, fonts } from '../../../constants/styles';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginBottom: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center' 
  },
  line: {
    height: 1,
    backgroundColor: colors.grey,
    flex: 1
  },
  text: {
    fontSize: fonts.size.medium,
    lineHeight: fonts.size.medium,
    paddingHorizontal: 8
  }
});