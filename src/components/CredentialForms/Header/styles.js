import { StyleSheet } from 'react-native';

import { colors, fonts } from '../../../constants/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 20,
    marginBottom: 30,
    maxHeight: 120,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-end' 
  },
  formTitle: {
    flexBasis: '70%',
    flexShrink: 0,
    flexGrow: 0,
    fontSize: 48,
    lineHeight: 56    
  },
  activeTitle: {
    color: '#5A3B77'
  },
  inactiveTitle: {
    color: 'rgba(119, 78, 156, 0.4458)'
  }
});