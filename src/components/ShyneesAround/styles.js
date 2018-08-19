import {StyleSheet } from 'react-native';

import {f_small, white} from '../../constants/styles';

export default StyleSheet.create({
  background: {
    backgroundColor: white
  },
  descriptionContainer: {
    alignItems: 'center'
  },
  description: {
    ...f_small,
    maxWidth: 235,
    textAlign: 'center'
  },
  shyneesAroundContainer: {
    flexWrap: 'wrap',
    flexDirection:'row',
    justifyContent: 'center',
    marginLeft: 15,
    marginRight: 15,
    marginTop: 80
  },
});
