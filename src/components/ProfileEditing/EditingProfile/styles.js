import {StyleSheet } from 'react-native';

import {colors} from '../../../constants/styles';

export default StyleSheet.create({
  tabsContainer: {
    backgroundColor: colors.white
  },
  tabText: {
    paddingLeft: 10, 
    paddingRight:10, 
    paddingTop: 8, 
    paddingBottom: 8,
  },
  wrapper: {
    marginLeft: 3,
    marginRight: 3,
  },
  content: {
    paddingBottom: 17,
  },
  form: {
    marginTop: 3,
  },
  infoForm: {
    backgroundColor: colors.white,
  }
});
