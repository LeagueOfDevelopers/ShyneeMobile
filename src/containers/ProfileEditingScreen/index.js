import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ProfileEditing from '../../components/ProfileEditing';

class ProfileEditingScreen extends React.PureComponent {

  render() {
    return (
      <ProfileEditing {...this.props}/>
    );
  }
}

ProfileEditingScreen.navigationOptions = {
  title: 'Profile Editing',
};

ProfileEditingScreen.propTypes = {
  navigation: PropTypes.object,
  dispatch: PropTypes.func,
  shynee: PropTypes.object,
};

const mapStateToProps = state => ({
  shynee: state.shynee.info,
});

export default connect(mapStateToProps)(ProfileEditingScreen);
