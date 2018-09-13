import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../constants/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  },
  textField: {
    marginBottom: 20
  },
  form: {
    marginBottom: 30
  },
  submit: {
    marginBottom: 30
  },
  submitText: {
    fontSize: fonts.size.medium,
    flexBasis: 40,
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 8,
    paddingBottom: 8
  },
  disabledSubmit: {
    backgroundColor: colors.white,
    borderColor: '#51368C',
    borderWidth: 1
  },
  disabledSubmitText: {
    color: '#51368C'    
  },
  enabledSubmit: {
    backgroundColor: '#665295'
  },
  enabledSubmitText: {
    color: colors.white
  }
});