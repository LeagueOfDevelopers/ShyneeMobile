import {StyleSheet } from 'react-native';

import {colors} from '../../../constants/styles';

export default StyleSheet.create({
  tab: {
    backgroundColor: colors.white
  },
  tabText: {
    paddingLeft: 10, 
    paddingRight:10, 
    paddingTop: 8, 
    paddingBottom: 8,
  },
  wrapper: {
    marginTop: 3,
    marginLeft: 3,
    marginRight: 3,
  },
  content: {
    paddingBottom: 17,
  }
});
