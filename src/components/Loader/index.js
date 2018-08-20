import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {View, ActivityIndicator} from 'react-native';

import styles from './styles';

class ShyneesAroundScreen extends PureComponent {
  render() {
    const {size = 80} = this.props;
    return (
      <View style={styles.container}>
        <ActivityIndicator size={size} />
      </View>
    );
  }
}

ShyneesAroundScreen.propTypes = {
  size: PropTypes.number,
};

export default ShyneesAroundScreen;
