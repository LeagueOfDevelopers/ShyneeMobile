import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {ScrollView, View} from 'react-native';

import TabMenu from '../../TabMenu';


class ProfileForm extends PureComponent {
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
    return (
      <ScrollView>
        <TabMenu 
          tabs={this.getTabs()}
          type='underlined'
        />
      </ScrollView>
    );
  }
}

ProfileForm.propTypes = {
  navigation: PropTypes.object,
  dispatch: PropTypes.func,
  shynee: PropTypes.object,
};

export default ProfileForm;
