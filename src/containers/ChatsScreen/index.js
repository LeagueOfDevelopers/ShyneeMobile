import React from 'react';
import PropTypes from 'prop-types';
import {View, Button } from 'react-native';

import Text from '../../components/Text';
import {CHAT} from '../../constants/screens';

class ChatsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Chats!</Text>
        <Button
          title="Go to Chat"
          onPress={() => this.props.navigation.navigate(CHAT)}
        />
      </View>
    );
  }
}

ChatsScreen.navigationOptions = {
  title: 'Chats',
};

ChatsScreen.propTypes = {
  navigation: PropTypes.object,
};

export default ChatsScreen;
