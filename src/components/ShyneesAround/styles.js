import {StyleSheet } from 'react-native';

import {f_small} from '../../constants/styles';

export default StyleSheet.create({
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
