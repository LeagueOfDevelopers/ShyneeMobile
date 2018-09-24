import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {View, Image} from 'react-native';
import { reduxForm, Field } from 'redux-form';

import { required } from '../../utils/validators';
import { editShyneeInfo } from '../../actions/shynee';
import TextField from '../Form/TextField';
import SegmentedControlField from '../Form/SegmentedControlField';
import TagsField from '../Form/TagsField';

import styles from './styles';

const onSubmit = (result, dispatch, props) => {
  editShyneeInfo(result, props.token)
    .catch(() => props.dropdown.alertWithType('error', 'Error', 'Something went wrong'));
};

const validate = (values) => {
  const errors = {};

  const nicknameRequiredRaised = required(values.nickname);
  if (nicknameRequiredRaised) {
    errors.nickname = nicknameRequiredRaised;
  }

  return errors;
};

class ProfileForm extends PureComponent {
  componentDidMount() {
    this.props.initialize(this.props.shynee);
  }

  render() {
    const {shynee} = this.props;
    return (
      <View>
        <View style={{...styles.card}}>
          <Image style={styles.avatar} source={{uri: shynee.avatarUri}}/>
          <Field title='Nickname*' name='nickname' placeholder='Nickname*' component={TextField} containerStyle={styles.nickname} />
        </View>
        <Field
          title='Sex'
          name='gender'
          labels={['Female', 'Male', 'Other']}
          values={['Female', 'Male', 'Other']}
          component={SegmentedControlField}
          containerStyle={styles.field}
        />
        <Field
          title='Name'
          placeholder='Name'
          name='name'
          component={TextField}
          containerStyle={styles.field}
        />
        <Field
          title='Date of birth'
          placeholder='Date of birth'
          activePlaceholder='19/02/1999'
          name='dob'
          component={TextField}
          containerStyle={styles.field}
        />
        <Field
          title='Interests'
          placeholder='Interests'
          activePlaceholder='Separated by commas'
          name='interests'
          component={TagsField}
          containerStyle={styles.field}
        />
        <Field
          title='About me'
          placeholder='About me'
          name='personalInfo'
          component={TextField}
          containerStyle={styles.field}
        />
      </View>
    );
  }
}

ProfileForm.propTypes = {
  shynee: PropTypes.object,
  initialize: PropTypes.func,
  dropdown: PropTypes.node,
};

export default reduxForm({
  form: 'profileEditFrom',
  //TODO: Добавить отправку данных
  onSubmit,
  validate
})(ProfileForm);
