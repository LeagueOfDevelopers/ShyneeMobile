import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import TagInput from 'react-native-tag-input';

import Text from '../../Text';

import styles from './styles';

class SegmentedControlField extends PureComponent {
  state = {
    text: '',
    interests: []
  }

  onChangeText = (text) => {
    this.setState({ text });

    const lastTyped = text.charAt(text.length - 1);
    const parseWhen = [',', ';', '\n'];

    if (parseWhen.indexOf(lastTyped) > -1) {
      const {interests, text} = this.state;
      const updatedInterests = [...interests, text];

      this.props.input.onChange(updatedInterests);
      this.setState({
        interests: updatedInterests,
        text: '',
      });
    }
  }

  render() {
    const {
      title,
      containerStyle,
    } = this.props;
    return <View style={[styles.container, containerStyle]}>
      <Text style={styles.title}>{title}</Text>
      <TagInput
        value={this.state.interests}
        onChange={(interests) => this.setState({ interests })}
        labelExtractor={(interests) => interests}
        text={this.state.text}
        onChangeText={this.onChangeText}
      />
    </View>;
  }
}

SegmentedControlField.propTypes = {
  title: PropTypes.string,
  containerStyle: PropTypes.object,
  input: PropTypes.object,
};

export default SegmentedControlField;
