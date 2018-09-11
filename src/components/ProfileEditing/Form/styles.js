import {StyleSheet } from 'react-native';

import {colors} from '../../../constants/styles';

export default StyleSheet.create({
  tab: {
    marginTop: 9
  },
  tabText: {
    paddingLeft: 10, 
    paddingRight:10, 
    paddingTop: 8, 
    paddingBottom: 8,
  },
  content: {
    margin: 3,
    paddingBottom: 17,
    backgroundColor: colors.white,
  }
});
