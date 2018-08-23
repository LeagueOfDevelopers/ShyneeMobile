import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {View, ActivityIndicator} from 'react-native';

import styles from './styles';

class Loader extends PureComponent {
  render() {
    const {size = 80} = this.props;
    return (
      <View style={styles.container}>
        <ActivityIndicator size={size} />
      </View>
    );
  }
}

Loader.propTypes = {
  size: PropTypes.number,
};

export default Loader;
