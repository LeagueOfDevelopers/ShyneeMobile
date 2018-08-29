import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';

import Button from '../Button';

import tabMenuStyles from './styles';

class ShyneesAroundScreen extends PureComponent {
  state = {
    tabs: this.props.tabs
  }

  onPress = (currentTab) => () => {
    const updatedTabs = this.state.tabs.map(tab => {
      tab.active = false;
      if(tab.title === currentTab.title) {
        tab.active = true;
      } 
      return tab;
    });
    this.setState({tabs: updatedTabs});
    currentTab.onPress();
  };

  render() {
    const {
      tabs,
      type = 'normal',
      style: customStyles,
      tabStyle: customTabStyles,
      textStyle: customTextStyles
    } = this.props;
    const styles = tabMenuStyles[type];

    return (
      <View style={[styles.tabsContainer, customStyles]}>
        {tabs.map((tab, index)=> 
          <Button
            key={index}
            style={[styles.tab, customTabStyles, tab.active ? styles.activeTab: {}]}
            textStyle={[styles.text, customTextStyles, tab.active ? styles.activeText: {}]}
            title={tab.title}
            onPress={this.onPress(tab)}
          />
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
  tabStyle: PropTypes.object,
  textStyle: PropTypes.object,
};

export default ShyneesAroundScreen;
