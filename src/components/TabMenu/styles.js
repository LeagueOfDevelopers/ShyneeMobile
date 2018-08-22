import {StyleSheet } from 'react-native';

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
      marginRight: 10
    }
  })
};
