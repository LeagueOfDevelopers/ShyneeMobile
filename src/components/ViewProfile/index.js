import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {View, Button} from 'react-native';

import Text from '../Text';
import ProfileCard from '../ProfileCard';
import TabMenu from '../TabMenu';
import {CHAT} from '../../constants/screens';

import styles from './styles';

class ViewProfile extends PureComponent {
  getTabs() {
    return [
      {
        title: 'Reveal info',
        onPress: () => {}
      },
      {
        title: 'Chat',
        onPress: () => {}
      }
    ];
  }

  render() {
    const {shynee, navigation } = this.props;
    return (
      <View>
        <View>
          <ProfileCard style={{marginTop: 8}} shynee={shynee} />
          <TabMenu tabs={this.getTabs()} style={styles.tabMenu}/>
        </View>
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
