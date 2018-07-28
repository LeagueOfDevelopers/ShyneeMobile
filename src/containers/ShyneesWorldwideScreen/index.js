import React from 'react';
import PropTypes from 'prop-types';
import {View, Button } from 'react-native';

import Text from '../../components/Text';
import {BUY_THIS_APP} from '../../constants/screens';

class ShyneesWorldwideScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>ShyneesWorldwide!</Text>
        <Button
          title="Go to Buy This App"
          onPress={() => this.props.navigation.navigate(BUY_THIS_APP)}
        />
      </View>
    );
  }
}

ShyneesWorldwideScreen.navigationOptions = {
  title: 'Shynees Worldwide',
};

ShyneesWorldwideScreen.propTypes = {
  navigation: PropTypes.object,
};

export default ShyneesWorldwideScreen;
