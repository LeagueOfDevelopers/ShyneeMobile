import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {shyneeInfoSelector} from '../../selectors/shynee';
import ProfileEditing from '../../components/ProfileEditing';
import HeaderButton from '../../components/HeaderButton/Text';

class ProfileEditingScreen extends React.PureComponent {

  render() {
    return (
      <ProfileEditing {...this.props}/>
    );
  }
}

ProfileEditingScreen.navigationOptions = {
  title: 'Profile Editing',
  headerRight: <HeaderButton title='Edit'/>
};

ProfileEditingScreen.propTypes = {
  navigation: PropTypes.object,
  dispatch: PropTypes.func,
  shynee: PropTypes.object,
};

const mapStateToProps = state => ({
  shynee: shyneeInfoSelector(state)
});

export default connect(mapStateToProps)(ProfileEditingScreen);
