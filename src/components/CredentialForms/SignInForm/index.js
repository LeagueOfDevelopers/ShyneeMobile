import React, { PureComponent } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';

import { required, email, password } from '../../../utils/validators';
import { signInShynee } from '../../../actions/auth';
import { PROFILE } from '../../../constants/screens';
import Button from '../../Button';
import Divider from '../Divider';
import Header from '../Header';
import Socials from '../Socials';
import TextField from '../../Form/TextField';

import styles from '../styles';

const onSubmitSuccess = (result, dispatch, props) => {
  props.navigation.navigate(PROFILE);
};

const validate = (values) => {
  const errors = {};

  const emailRequiredRaised = required(values.email, 'Enter email to sign in');
  const emailInvalidRaised = email(values.email);
  if (emailRequiredRaised) {
    errors.email = emailRequiredRaised;
  } else if (emailInvalidRaised) {
    errors.email = emailInvalidRaised;
  }

  const passwordRequiredRaised = required(values.password, 'Enter password to sign in');
  const passwordInvalidRaised = password(values.password);
  if (passwordRequiredRaised) {
    errors.password = passwordRequiredRaised;
  } else if (passwordInvalidRaised) {
    errors.password = passwordInvalidRaised;
  }

  return errors;
};

class SignInForm extends PureComponent {
  async onSubmitPressed(values, dispatch) {
    const { email, password } = values;
    const action = await signInShynee(email, password);
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
          <View style={styles.textField}>
            <Field
              title='Password'
              placeholder='Password'
              name='password'
              secureTextEntry
              component={TextField}
            />
            <Button
              disabled={!this.props.valid || this.props.submitting}
              onPress={this.props.handleSubmit(this.onSubmitPressed)}
              title='Forgot password?'
              style={styles.forgotPasswordButton}
              textStyle={styles.forgotPasswordText}
            />
          </View>
        </View>
        <Button
          title={this.props.submitting ? 'Logging in...' : 'Login'}
          onPress={this.props.handleSubmit(this.onSubmitPressed)}
          type='colorful'
          disabled={!this.props.valid || this.props.submitting}
          style={styles.submit}
          buttonStyle={this.props.valid ? styles.enabledSubmit : styles.disabledSubmit}
          textStyle={[styles.submitText, this.props.valid ? styles.enabledSubmitText : styles.disabledSubmitText]} />
        <Divider />
        <Socials />
      </View>
    );
  }
}

SignInForm.propTypes = {
  navigation: PropTypes.object,  
  handleSubmit: PropTypes.func,
  valid: PropTypes.bool,
  submitting: PropTypes.bool
};

export default reduxForm({ form: 'signInForm', validate, onSubmitSuccess })(SignInForm);
