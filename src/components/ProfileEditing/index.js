import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import { submit } from 'redux-form';

import Loader from '../Loader';
import HeaderButton from '../HeaderButton/Text';
import EditingProfile from './EditingProfile';
import Profile from './Profile';

class ProfileEditing extends PureComponent {
  state = {
    isEditing: false,
  };

  componentDidMount = () => 
    this.updateEditButton();

  onPressEditButton = () =>
    this.setState({isEditing: !this.state.isEditing}, this.updateEditButton)

  onPressDoneButton = () => {
    this.props.dispatch(submit('profileEditFrom'));
  }
  
  //TODO: Добавить очистку формы
  onPressCancelButton = () => this.onPressEditButton()

  updateEditButton = () => {
    const {isEditing} = this.state;
    this.props.navigation.setParams({
      profileHeaderRight: <HeaderButton 
        title={isEditing ? 'Done' : 'Edit'}
        onPress={isEditing ? this.onPressDoneButton : this.onPressEditButton}
      />,
      profileHeaderLeft: isEditing ? <HeaderButton 
        title='Cancel'
        onPress={this.onPressCancelButton}
      /> : undefined
    });
  }

  render() {
    const {shyneeId, shynee, shyneeSettingsPrivacy, dispatch} = this.props;
    if (shynee.data) {
      if (this.state.isEditing) 
        return <EditingProfile
          shyneeId={shyneeId}
          shynee={shynee}
          shyneeSettingsPrivacy={shyneeSettingsPrivacy}
          dispatch={dispatch}
        />;

      return <Profile shynee={shynee} />;
    }

    if (shynee.error) {
      return null;
    }
    return (<Loader />);
  }
}

ProfileEditing.propTypes = {
  navigation: PropTypes.object,
  dispatch: PropTypes.func,
  shyneeId: PropTypes.string,
  shynee: PropTypes.object,
  shyneeSettingsPrivacy: PropTypes.object,
};

export default ProfileEditing;
