import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {View, Text, Button } from 'react-native';

import {VIEW_PROFILE, SETTINGS} from '../../constants/screens';
import {getShyneesAround} from '../../actions/shynees';

class ShyneesAroundScreen extends React.Component {
  componentDidMount() {
    this.props.dispatch(getShyneesAround());
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>ShyneesAround!</Text>
        <Button
          title="Go to View Profile"
          onPress={() => this.props.navigation.navigate(VIEW_PROFILE)}
        />
        <Button
          title="Go to Settings"
          onPress={() => this.props.navigation.navigate(SETTINGS)}
        />
      </View>
    );
  }
}

ShyneesAroundScreen.navigationOptions = {
  title: 'Shynees Around',
};

ShyneesAroundScreen.propTypes = {
  navigation: PropTypes.object,
  dispatch: PropTypes.func,
};

const mapStateToProps = state => ({
  shyneesAround: state.shyneesAround
});

export default connect(mapStateToProps)(ShyneesAroundScreen);
