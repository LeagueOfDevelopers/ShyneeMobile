import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {View, Button} from 'react-native';

import Text from '../Text';
import ProfileCard from '../ProfileCard';
import {CHAT} from '../../constants/screens';

class ViewProfile extends PureComponent {
  render() {
    const {shynee, navigation } = this.props;
    return (
      <View>
        <ProfileCard style={{marginTop: 8}} shynee={shynee}/>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>View Profile!</Text>
          <Button
            title="Go to Chat"
            onPress={() => navigation.navigate(CHAT)}
          />
        </View>
      </View>
    );
  }
}

ViewProfile.propTypes = {
  navigation: PropTypes.object,
  dispatch: PropTypes.func,
  shynee: PropTypes.object,
};

export default ViewProfile;
