import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import SignUpForm from '../../components/CredentialForms/SignUpForm';

class SignUpScreen extends PureComponent {
  render() {
    return (
      <SignUpForm {...this.props} />
    );
  }
}

SignUpScreen.propTypes = {
  navigation: PropTypes.object,
  dispatch: PropTypes.func
};

SignUpScreen.navigationOptions = () => {
  return {
    header: null
  };
};

export default SignUpScreen;
