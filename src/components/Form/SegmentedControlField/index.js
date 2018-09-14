import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import SegmentedControlTab from 'react-native-segmented-control-tab';

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
    return <SegmentedControlTab
      values={this.props.titles}
      selectedIndex={this.state.selectedIndex}
      onTabPress={this.handleIndexChange}
    />;
  }
}

SegmentedControlField.propTypes = {
  input: PropTypes.object,
  values: PropTypes.array,
  titles: PropTypes.array,
};

export default SegmentedControlField;
