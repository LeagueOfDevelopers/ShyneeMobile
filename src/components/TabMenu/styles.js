import {StyleSheet } from 'react-native';

import {colors} from '../../constants/styles';

export default {
  normal: StyleSheet.create({
    tabsContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'nowrap',
    },
    tab: {
      flexGrow: 1,
      marginLeft: 10,
      marginRight: 10,
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: colors.primary,
      borderRadius: 100,
      overflow: 'hidden'
    },
    text: {
      marginTop: 5,
      marginBottom: 5,
      marginLeft: 32,
      marginRight: 32,
      color: colors.primary
    }
  }),
  underlined: {
    
  }
};
