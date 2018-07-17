import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';

import Home from '../../components/Home';
import styles from './styles';

class HomeScreen extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Home navigation={this.props.navigation}/>
      </View>
    );
  }
}

HomeScreen.navigationOptions = {
  title: 'Home Screen',
};

HomeScreen.propTypes = {
  navigation: PropTypes.object
};

export default HomeScreen;
