import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ProfileEditing from '../../components/ProfileEditing';
import {getShyneeProfile} from '../../actions/shynee';

class ProfileEditingScreen extends React.PureComponent {
  componentDidMount() {
    const {dispatch} = this.props;
    //TODO: Заменить фэйковый id на id пользователя
    dispatch(getShyneeProfile(this.props.fakeShynee));
  }
  
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
  fakeShynee: PropTypes.string
};

const mapStateToProps = state => ({
  shynee: state.shynee.info,
  fakeShynee: state.shyneesAround.data[0].id
});

export default connect(mapStateToProps)(ProfileEditingScreen);
