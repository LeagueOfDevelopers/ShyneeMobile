import { StyleSheet } from 'react-native';

import { colors } from '../../../constants/styles';
import { convertHex } from '../../../utils/helpers';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 20,
    marginBottom: 28,
    maxHeight: 120,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-end' 
  },
  titleContainer: {
    flexBasis: '75%',
    flexShrink: 0,
    flexGrow: 0,
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  titleText: {    
    fontSize: 48,
    lineHeight: 56    
  },
  activeTitle: {
    color: colors.primary
  },
  inactiveTitle: {
    color: convertHex(colors.primary, 0.4457)
  }
});