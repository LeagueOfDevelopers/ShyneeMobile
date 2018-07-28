import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {View, Button} from 'react-native';

import Text from '../../components/Text';
import {getSettings} from '../../actions/settings';

class SettingsScreen extends PureComponent {
  render() {
    const {
      navigation,
      getSettings,
      settings
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
        <Text>Status: {settings.status}</Text>
      </View>
    );
  }
}

SettingsScreen.navigationOptions = {
  title: 'Home Screen',
};

SettingsScreen.propTypes = {
  navigation: PropTypes.object,
  getSettings: PropTypes.func,
  settings: PropTypes.object
};

const mapStateToProps = state => ({
  settings: state.settings
});

const mapDispatchToProps = dispatch => ({
  getSettings: () => dispatch(getSettings())
});

export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreen);
