import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { reduxForm, Field } from 'redux-form';
import Button from '../../Button';
import Divider from '../Divider';
import Header from '../Header';
import Socials from '../Socials';
import TextField from '../../ProfileInfoForm/TextField';
import { signUpShynee } from '../../../actions/auth';
import { required, email, password } from '../../../utils/validators';
import { PROFILE_EDITING } from '../../../constants/screens';
import styles from '../styles';

const onSubmitSuccess = (result, dispatch, props) => {
  props.navigation.navigate(PROFILE_EDITING);
};

const validate = (values) => {
  const errors = {};

  const emailRequiredRaised = required(values.email, 'Provide email to sign up');
  const emailInvalidRaised = email(values.email);
  if (emailRequiredRaised) {
    errors.email = emailRequiredRaised;
  } else if (emailInvalidRaised) {
    errors.email = emailInvalidRaised;
  }

  const passwordRequiredRaised = required(values.password, 'Enter password to sign up (min. 8 symbols)');
  const passwordInvalidRaised = password(values.password);
  if (passwordRequiredRaised) {
    errors.password = passwordRequiredRaised;
  } else if (passwordInvalidRaised) {
    errors.password = passwordInvalidRaised;
  }

  return errors;
};

class SignUpForm extends PureComponent {
  async onSubmitPressed(values, dispatch) {
    const { email, password } = values;
    const action = await signUpShynee(email, password);
    dispatch(action);
  }

  render() {
    return (
      <View style={styles.container}>
        <Header navigation={this.props.navigation} />
        <View style={styles.form}>
          <Field
            title='Email'
            placeholder='Email'
            name='email'
            component={TextField}
            containerStyle={styles.textField}
          />
          <Field
            title='Password'
            placeholder='Password'
            name='password'
            secureTextEntry
            component={TextField}
            containerStyle={styles.textField}
          />
        </View>
        <Button
          disabled={!this.props.valid || this.props.submitting}
          onPress={this.props.handleSubmit(this.onSubmitPressed)}
          title={this.props.submitting ? 'Registering...' : 'Get started'}
          type='colorful'
          style={styles.submit}
          buttonStyle={this.props.valid ? styles.enabledSubmit : styles.disabledSubmit}
          textStyle={[styles.submitText, this.props.valid ? styles.enabledSubmitText : styles.disabledSubmitText]} />
        <Divider />
        <Socials />
      </View>
    );
  }
}

SignUpForm.propTypes = {
  navigation: PropTypes.object,
  handleSubmit: PropTypes.func,
  valid: PropTypes.bool,
  submitting: PropTypes.bool
};

export default reduxForm({ 
  form: 'signUpForm',
  onSubmitSuccess, 
  validate })(SignUpForm);
