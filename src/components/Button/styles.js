import {StyleSheet } from 'react-native';

import {fonts, colors} from '../../constants/styles';

export default {
  colorful: StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: colors.black,
      shadowOffset: {
        width: 0,
        height: 4
      },
      shadowRadius: 8,
      shadowOpacity: 0.16
    },
    button: {
      backgroundColor: colors.primary,
      borderRadius: 200,
    },
    text: {
      fontSize: fonts.size.large,
      fontWeight: fonts.weight.small,
      textAlign: 'center',
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 30,
      paddingRight: 30,
      color: colors.white,
      flexBasis: 0,
      width: '100%'
    }
  }),
  normal: StyleSheet.create({
    container: {
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: colors.primary,
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
      fontFamily: fonts.family.light,
      fontSize: fonts.size.small,
      fontWeight: fonts.weight.small,
      color: colors.primary
    }
  })
};
