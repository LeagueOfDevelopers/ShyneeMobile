import {StyleSheet } from 'react-native';

import {fonts, colors} from '../../../constants/styles';

export default StyleSheet.create({
  inputContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    minHeight: 50
  },
  title: {
    ...fonts.weight.light,
    fontSize: fonts.size.xsmall,
    flexGrow: 1,
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
    flexGrow: 1,
    paddingTop: 4,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
  },
  validInput: {
    color: colors.primary
  },
  invalidInput: {
    color: colors.black
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: colors.grey,
  },
  activeLine: {
    backgroundColor: colors.primary,
  },
  errorLine: {
    backgroundColor: colors.error,
  },
  error: {
    color: colors.error,
    fontSize: fonts.size.xsmall
  }
});
