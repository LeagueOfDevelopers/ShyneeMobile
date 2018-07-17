import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  View,
  Button,
  Text,
} from 'react-native';

import {getSettings} from '../../actions/settings';

class SettingsScreen extends PureComponent {
  render() {
    const {
      navigation,
      getSettings
    } = this.props;
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        />
        <Button
          title="Get some settings"
          onPress={()=> getSettings()}
        />
      </View>
    );
  }
}

SettingsScreen.navigationOptions = {
  title: 'Home Screen',
};

SettingsScreen.propTypes = {
  navigation: PropTypes.object,
  getSettings: PropTypes.func
};

const mapDispatchToProps = (dispatch) => ({
  getSettings: () => dispatch(getSettings())
});

export default connect(null, mapDispatchToProps)(SettingsScreen);
