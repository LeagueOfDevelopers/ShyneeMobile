import {StyleSheet } from 'react-native';

import {f_small} from '../../constants/styles';

export default StyleSheet.create({
  buttonContainer: {
    marginTop: 16
  },
  descriptionContainer: {
    alignItems: 'center'
  },
  description: {
    ...f_small,
    maxWidth: 230,
    marginTop: 5,
    textAlign: 'center'
  },
  shyneesAroundContainer: {
    flexWrap: 'wrap',
    flexDirection:'row',
    justifyContent: 'center',
    marginLeft: 15,
    marginRight: 15,
    marginTop: 24
  },
});
