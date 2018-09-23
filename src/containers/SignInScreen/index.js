import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { PROFILE } from '../../constants/screens';
import { shyneeInfoSelector } from '../../selectors/shynee';
import SignInForm from '../../components/CredentialForms/SignInForm';
import Loader from '../../components/Loader';

class SignInScreen extends PureComponent {
  componentDidMount() {
    if (this.props.shyneeInfo.data) {
      this.props.navigation.navigate(PROFILE);
    }
  }

  render() {
    if (this.props.shyneeInfo.fetching) {
      return <Loader />;
    }

    return (
      <SignInForm {...this.props} />
    );
  }
}

SignInScreen.propTypes = {
  navigation: PropTypes.object,
  dispatch: PropTypes.func,
  shyneeInfo: PropTypes.object
};

SignInScreen.navigationOptions = () => {
  return {
    header: null
  };
};

const mapStateToProps = (state) => ({
  shyneeInfo: shyneeInfoSelector(state)
});

export default connect(mapStateToProps)(SignInScreen);
