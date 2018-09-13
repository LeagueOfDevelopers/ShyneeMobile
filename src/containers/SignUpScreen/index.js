import React, { PureComponent } from 'react';

import SignUpForm from '../../components/CredentialForms/SignUpForm';

export default class SignUpScreen extends PureComponent {
  render() {
    return (
      <SignUpForm {...this.props} />
    );
  }
}
