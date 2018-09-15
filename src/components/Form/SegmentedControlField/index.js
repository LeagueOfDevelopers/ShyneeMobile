import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import SegmentedControlTab from 'react-native-segmented-control-tab';

import Text from '../../Text';

import styles from './styles';

class SegmentedControlField extends PureComponent {
  state = {
    selectedIndex: 0,
  }

  componentDidMount() {
    const {input, values} = this.props;
    input.onChange(values[this.state.selectedIndex]);
  }

  handleIndexChange = (index) => {
    const {input, values} = this.props;
    input.onChange(values[index]);
    this.setState({
      selectedIndex: index,
    });
  }

  render() {
    const {
      title,
      labels,
      borderRadius = 100,
      containerStyle,
      tabsContainerStyle,
      tabStyle,
      tabTextStyle,
      activeTabStyle,
      activeTabTextStyle
    } = this.props;
    return <View style={[styles.container, containerStyle]}>
      <Text style={styles.title}>{title}</Text>
      <SegmentedControlTab
        values={labels}
        selectedIndex={this.state.selectedIndex}
        onTabPress={this.handleIndexChange}
        borderRadius={borderRadius}
        tabsContainerStyle={[styles.tabsContainerStyle, tabsContainerStyle]}
        tabStyle={[styles.tabStyle, tabStyle]}
        tabTextStyle={[styles.tabTextStyle, tabTextStyle]}
        activeTabStyle={[styles.activeTabStyle, activeTabStyle]}
        activeTabTextStyle={[styles.activeTabTextStyle, activeTabTextStyle]}
      />
    </View>;
  }
}

SegmentedControlField.propTypes = {
  input: PropTypes.object,
  title: PropTypes.string,
  values: PropTypes.array,
  labels: PropTypes.array,
  borderRadius: PropTypes.number,
  containerStyle: PropTypes.object,
  tabsContainerStyle: PropTypes.object,
  tabStyle: PropTypes.object,
  tabTextStyle: PropTypes.object,
  activeTabStyle: PropTypes.object,
  activeTabTextStyle: PropTypes.object,
};

export default SegmentedControlField;
