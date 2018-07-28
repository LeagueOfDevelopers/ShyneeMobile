import React from 'react';
import {View } from 'react-native';

import Text from '../../components/Text';

class ChatScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Chat!</Text>
      </View>
    );
  }
}

ChatScreen.navigationOptions = {
  title: 'Chat',
};

export default ChatScreen;
