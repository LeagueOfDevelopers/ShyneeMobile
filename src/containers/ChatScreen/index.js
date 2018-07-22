import React from 'react';
import {View, Text } from 'react-native';

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
