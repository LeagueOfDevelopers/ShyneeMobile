import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {shyneeInfoSelector, shyneeSettingsPrivacySelector} from '../../selectors/shynee';
import ProfileEditing from '../../components/ProfileEditing';

class ProfileEditingScreen extends React.PureComponent {

  render() {
    return (
      <ProfileEditing {...this.props}/>
    );
  }
}

ProfileEditingScreen.navigationOptions = ({navigation}) => {
  return({
    title: 'Profile Editing',
    headerRight: navigation.getParam('profileHeaderRight'),
    headerLeft: navigation.getParam('profileHeaderLeft')
  });
};

ProfileEditingScreen.propTypes = {
  navigation: PropTypes.object,
  dispatch: PropTypes.func,
  shynee: PropTypes.object,
  shyneeSettingsPrivacy: PropTypes.object,
};

const mapStateToProps = state => ({
  shynee: shyneeInfoSelector(state),
  shyneeSettingsPrivacy: shyneeSettingsPrivacySelector(state)
});

export default connect(mapStateToProps)(ProfileEditingScreen);
