import React, { PureComponent } from 'react';
import { View } from 'react-native';
import { reduxForm, Field } from 'redux-form';
import styles from '../styles';
import Button from '../../Button';
import Divider from '../Divider';
import Header from '../Header';
import Socials from '../Socials';

class SignInForm extends PureComponent {
  render() {
    return (
      <View>
        <Header />        
        <View style={styles.form}>
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

export default reduxForm({ form: 'signInForm' })(SignInForm);
