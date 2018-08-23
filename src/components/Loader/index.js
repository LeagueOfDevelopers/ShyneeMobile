import Platform from 'Platform';
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {View, ActivityIndicator} from 'react-native';

import styles from './styles';

class ShyneesAroundScreen extends PureComponent {
  render() {
    const {size = 80} = this.props;
    return (
      <View style={styles.container}>
        <ActivityIndicator size={Platform.OS === 'android' ? size : 0} />
      </View>
    );
  }
}

ShyneesAroundScreen.propTypes = {
  size: PropTypes.number,
};

export default ShyneesAroundScreen;
