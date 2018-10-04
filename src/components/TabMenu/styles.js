import {StyleSheet } from 'react-native';

import {colors, fonts} from '../../constants/styles';

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
      overflow: 'hidden',
      flexBasis: 0
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
    tabsContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'nowrap',
    },
    tab: {
      flexGrow: 1,
    },
    text: {
      marginTop: 4,
      marginBottom: 4,
      fontSize: fonts.size.small
    },
    activeTab: {
      borderStyle: 'solid',
      borderBottomWidth: 2,
      borderBottomColor: colors.primary
    },
    activeText: {
      color: colors.primary,
    }
  }
};
