import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  shyneeTokenSelector,
  shyneeIdSelector,
  shyneeInfoSelector,
  shyneeSettingsPrivacySelector
} from '../../selectors/shynee';
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
  shyneeId: PropTypes.string,
  token: PropTypes.string,
  shynee: PropTypes.object,
  shyneeSettingsPrivacy: PropTypes.object,
};

const mapStateToProps = state => ({
  token: shyneeTokenSelector(state),
  shyneeId: shyneeIdSelector(state),
  shynee: shyneeInfoSelector(state),
  shyneeSettingsPrivacy: shyneeSettingsPrivacySelector(state)
});

export default connect(mapStateToProps)(ProfileEditingScreen);
