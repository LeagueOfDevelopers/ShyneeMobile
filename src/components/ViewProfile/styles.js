import {StyleSheet } from 'react-native';

import {white, grey, primaryColor, ff_light, f_small, fs_large, fw_small} from '../../constants/styles';

export default StyleSheet.create({
  tabMenu: {
    marginLeft: 10, 
    marginRight:10, 
    marginTop: 17, 
    paddingBottom: 8,
  },
  topContent: {
    backgroundColor: white
  },
  content: {
    margin: 3,
    paddingBottom: 17,
    backgroundColor: white
  },
  info: {
    marginTop: 17,
    marginLeft: 20
  },
  infoItem: {
    marginBottom: 8
  },
  itemName: {
    color: grey,
    fontFamily: ff_light,
    ...f_small
  },
  itemValue: {
    fontSize: fs_large,
  },
  interests: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 8
  },
  interestContainer: {
    backgroundColor: primaryColor,
    borderRadius: 100,
    marginRight: 8
  },
  interest: {
    color: white,
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 21,
    paddingRight: 21
  }
});
