import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import { submit } from 'redux-form';

import Loader from '../Loader';
import HeaderButton from '../HeaderButton/Text';
import EditingProfile from './EditingProfile';
import Profile from './Profile';

class ProfileEditing extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
    };

    this.tabsOnEditingProfile = [{
      title: 'Profile Info',
      active: true,
      onPress: () => {}
    },{
      title: 'Privacy settings',
      onPress: () => {}
    }];
    
    this.tabsOnProfile = [{
      title: 'For me',
      active: true,
      onPress: () => {}
    },{
      title: 'For shynees',
      onPress: () => {}
    }];
  }

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
    const {shynee} = this.props;
    if (shynee.data) {
      if (this.state.isEditing) 
        return <EditingProfile shynee={shynee} tabs={this.tabsOnEditingProfile} />;

      return <Profile shynee={shynee} tabs={this.tabsOnProfile} />;
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
  shynee: PropTypes.object,
};

export default ProfileEditing;
