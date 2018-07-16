import React, {PureComponent} from 'react';
import {
  View,
  Button,
  Text,
} from 'react-native';

class Home extends PureComponent {
  render() {
    const {navigation} = this.props;
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        />
      </View>
    );
  }
}

export default Home;
