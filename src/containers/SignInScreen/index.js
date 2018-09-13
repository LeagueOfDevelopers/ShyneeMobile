import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import SignInForm from '../../components/CredentialForms/SignInForm';

class SignInScreen extends PureComponent {
  render() {
    return (
      <SignInForm {...this.props} />
    );
  }
}

SignInScreen.propTypes = {
  navigation: PropTypes.object,
  dispatch: PropTypes.func
};

SignInScreen.navigationOptions = () => {
  return {
    header: null
  };
};

export default SignInScreen;
