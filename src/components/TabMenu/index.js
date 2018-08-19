import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';

import Button from '../Button';

import tabMenuStyles from './styles';

class ShyneesAroundScreen extends PureComponent {
  render() {
    const {tabs, type = 'normal', style: customStyles,} = this.props;
    const styles = tabMenuStyles[type];
    return (
      <View style={{...styles.tabsContainer, ...customStyles}}>
        {tabs.map((tab, index)=> 
          <Button key={index} style={styles.tab} title={tab.title} onPress={tab.onPress} />
        )}
      </View>
    );
  }
}

ShyneesAroundScreen.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    onPress: PropTypes.func
  })).isRequired,
  type: PropTypes.string,
  style: PropTypes.object,
};

export default ShyneesAroundScreen;
