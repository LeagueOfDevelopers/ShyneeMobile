import React, { PureComponent } from 'react';
import { View } from 'react-native';
import { reduxForm, Field } from 'redux-form';
import styles from '../styles';
import Button from '../../Button';
import Divider from '../Divider';
import Header from '../Header';
import Socials from '../Socials';
import TextField from '../../ProfileInfoForm/TextField';

class SignInForm extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Header />
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
            component={TextField}
            containerStyle={styles.textField}
          />
        </View>
        <Button
          title='Login'
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

export default reduxForm({ form: 'signInForm' })(SignInForm);
