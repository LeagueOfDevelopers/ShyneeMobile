import {StyleSheet } from 'react-native';

import {colors} from '../../constants/styles';

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
  topContent: {
    backgroundColor: colors.white
  },
  wrapper: {
    marginTop: 3,
    marginLeft: 3,
    marginRight: 3,
    backgroundColor: colors.white,
  },
  content: {
    paddingBottom: 17,
  }
});
