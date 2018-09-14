import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { reduxForm, Field } from 'redux-form';
import Button from '../../Button';
import Divider from '../Divider';
import Header from '../Header';
import Socials from '../Socials';
import TextField from '../../ProfileInfoForm/TextField';

import styles from '../styles';

class SignUpForm extends PureComponent {
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
          title='Get started'
          type='colorful'
          style={styles.submit}
          buttonStyle={styles.disabledSubmit}
          textStyle={[styles.submitText, styles.disabledSubmitText]} />
        <Divider />
        <Socials />
      </View>
    );
  }
}

SignUpForm.propTypes = {
  navigation: PropTypes.object
};

export default reduxForm({ form: 'signUpForm' })(SignUpForm);
