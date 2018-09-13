import React, { PureComponent } from 'react';
import {  View } from 'react-native';
import { reduxForm, Field } from 'redux-form';
import Button from '../../Button';
import Divider from '../Divider';
import Header from '../Header';
import Socials from '../Socials';

import styles from '../styles';

class SignUpForm extends PureComponent {
  render() {
    return (
      <View>
        <Header />        
        <View style={styles.form}>
          <Field />
          <Field />
          <Field />
        </View>
        <Button style={styles.submit}></Button>
        <Divider />
        <Socials />
      </View>
    );
  }
}

export default reduxForm({ form: 'signUpForm' })(SignUpForm);
