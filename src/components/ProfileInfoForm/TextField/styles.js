import {StyleSheet } from 'react-native';

import {fonts, colors} from '../../../constants/styles';

export default StyleSheet.create({
  container: {
    marginLeft: 20,
    marginRight: 20
  },
  inputContainer: {
    borderStyle: 'solid',
    borderBottomWidth: 1,
    maxHeight: 50,
    paddingTop: 8,
    paddingBottom: 8
  },
  activeContainer: {    
    borderBottomColor: colors.primary,
  },
  inactiveContainer: {
    borderBottomColor: colors.grey,
  },
  errorContainer: {
    borderBottomColor: colors.error,
    marginBottom: 8
  },
  title: {
    ...fonts.weight.light,    
    fontSize: fonts.size.xsmall,
    maxHeight: 20
  },
  validTitle: {
    color: colors.grey,
  },
  errorTitle: {
    color: colors.error
  },
  input: {
    fontSize: fonts.size.medium,
    lineHeight: fonts.size.medium,
    textAlignVertical: 'center',
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0
  },
  validInput: {
    color: colors.primary
  },
  invalidInput: {
    color: colors.black
  },
  activeInput: {
    maxHeight: 30
  },
  inactiveInput: {
    maxHeight: 50
  },
  error: {
    color: colors.error,
    fontSize: fonts.size.xsmall
  }
});
