import {StyleSheet } from 'react-native';

import {fs_large, fw_small, primaryColor, white, black, ff_light, f_small} from '../../constants/styles';

export default {
  colorful: StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: black,
      shadowOffset: {
        width: 0,
        height: 4
      },
      shadowRadius: 8,
      shadowOpacity: 0.16
    },
    button: {
      backgroundColor: primaryColor,
      borderRadius: 200,
    },
    text: {
      fontSize: fs_large,
      fontWeight: fw_small,
      textAlign: 'center',
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 30,
      paddingRight: 30,
      color: white,
      flexBasis: 0,
      width: '100%'
    }
  }),
  normal: StyleSheet.create({
    container: {
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: primaryColor,
      borderRadius: 100,
      overflow: 'hidden'
    },
    button: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      marginTop: 5,
      marginBottom: 5,
      marginLeft: 32,
      marginRight: 32,
      fontFamily: ff_light,
      ...f_small,
      color: primaryColor
    }
  })
};
