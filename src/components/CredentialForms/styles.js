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
  forgotPasswordButton: {
    paddingLeft: 20,
    marginTop: 8,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  forgotPasswordText: {
    fontSize: fonts.size.xsmall,
    color: colors.primary + 'AA'
  },
  form: {
    marginBottom: 28
  },
  submit: {
    marginBottom: 28
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
    borderColor: colors.primary,
    borderWidth: 1,
    minWidth: 170
  },
  disabledSubmitText: {
    color: colors.primary    
  },
  enabledSubmit: {
    backgroundColor: colors.primary,
    minWidth: 170
  },
  enabledSubmitText: {
    color: colors.white
  }
});