import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import TagInput from 'react-native-tag-input';

import {fonts, colors} from '../../../constants/styles';
import Text from '../../Text';

import styles from './styles';

class SegmentedControlField extends PureComponent {
  state = {
    text: '',
    interests: []
  }

  onChange = interests => {
    this.setState({ interests });
    this.props.input.onChange(interests);
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
    const {text, interests} = this.state;
    const {
      title,
      input,
      meta,
      containerStyle,
      placeholder,
      activePlaceholder
    } = this.props;
    const value = input.value.length !== 0 || text;

    return <View style={[styles.container, containerStyle]}>
      {value || meta.active ? <Text style={styles.title}>{title}</Text> : null}
      <TagInput
        value={interests}
        onChange={this.onChange}
        labelExtractor={interests => interests}
        text={text}
        onChangeText={this.onChangeText}
        tagColor={colors.white}
        tagTextColor={colors.primary}
        tagContainerStyle={styles.tagContainerStyle}
        tagTextStyle={styles.tagTextStyle}
        inputProps={{
          placeholder: value || meta.active ? activePlaceholder : placeholder,
          style: {
            fontSize: fonts.size.large,
            padding: 0,
            height: '100%',
            flexGrow: 1
          },
          onBlur:input.onBlur,
          onFocus:input.onFocus,
          ...meta
        }}
        inputDefaultWidth={200}
        maxHeight={200}
      />
    </View>;
  }
}

SegmentedControlField.propTypes = {
  title: PropTypes.string,
  containerStyle: PropTypes.object,
  input: PropTypes.object,
  meta: PropTypes.object,
  placeholder: PropTypes.string,
  activePlaceholder: PropTypes.string,
};

export default SegmentedControlField;
