import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {ScrollView, View} from 'react-native';

import Form from './Form';
import ProfileCard from '../ProfileCard';
import TabMenu from '../TabMenu';
import Loader from '../Loader';
import {Info, NoInfo} from '../ProfileInfo';
import HeaderButton from '../HeaderButton/Text';

import styles from './styles';

class ProfileEditing extends PureComponent {
  state = {
    isEditing: false
  }

  componentDidMount = () => 
    this.updateEditButton();

  updateEditButton = () => {
    const {isEditing} = this.state;
    this.props.navigation.setParams({
      profileHeaderRight: <HeaderButton 
        title={isEditing ? 'Done' : 'Edit'}
        //TODO: Заменить на отправку данных
        onPress={isEditing ? this.onPressEditButton : this.onPressEditButton}
      />
    });
  }

  onPressEditButton = () => 
    this.setState({isEditing: !this.state.isEditing}, this.updateEditButton)

  getTabs = () => {
    const tabs = [{
      title: 'For me',
      active: true,
      onPress: () => {}
    },{
      title: 'For shynees',
      onPress: () => {}
    }];
    return tabs;
  }

  render() {
    const {shynee} = this.props;
    if (shynee.data) {
      if (this.state.isEditing) return <Form/>;

      const {name, dob, gender, interests, personalInfo} = shynee.data;
      const infoExist = name || dob || gender || interests || personalInfo ? true : false;

      return (
        <ScrollView>
          <View style={styles.topContent}>
            <ProfileCard style={{marginTop: 8}} shynee={shynee.data} />
            <TabMenu 
              tabs={this.getTabs()}
              type='underlined'
              tabStyle={styles.tab}
              textStyle={styles.tabText}
            />
          </View>
          <View style={styles.content}>
            {infoExist ?  <Info shynee={shynee.data} /> : <NoInfo />}
          </View>
        </ScrollView>
      );
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
