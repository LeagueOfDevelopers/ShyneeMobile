import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import { submit } from 'redux-form';
import DropdownAlert from 'react-native-dropdownalert';
import {View} from 'react-native';

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

  onPressDoneButton = () =>
    this.props.dispatch(submit('profileEditFrom'), this.onPressEditButton);
  
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
    const {token, shyneeId, shynee, shyneeSettingsPrivacy, dispatch} = this.props;
    if (shynee.data && shynee.data.profile) {
      return <View>
        {
          this.state.isEditing ?
            <EditingProfile
              token={token}
              shyneeId={shyneeId}
              shynee={shynee}
              shyneeSettingsPrivacy={shyneeSettingsPrivacy}
              dispatch={dispatch}
              dropdown={this.dropdown}
            />
            :
            <Profile shynee={shynee} />
        }
        <DropdownAlert ref={ref => this.dropdown = ref} useNativeDriver={true}/>
      </View>;
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
  token: PropTypes.string,
  shyneeId: PropTypes.string,
  shynee: PropTypes.object,
  shyneeSettingsPrivacy: PropTypes.object,
};

export default ProfileEditing;
