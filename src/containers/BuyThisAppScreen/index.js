import React from 'react';
import {View } from 'react-native';

import Text from '../../components/Text';

class BuyThisAppScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Buy This App!</Text>
      </View>
    );
  }
}

BuyThisAppScreen.navigationOptions = {
  title: 'Buy This App',
};

export default BuyThisAppScreen;
