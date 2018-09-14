import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {View, Image} from 'react-native';
import { reduxForm, Field } from 'redux-form';

import TextField from '../Form/TextField';
import SegmentedControlField from '../Form/SegmentedControlField';

import styles from './styles';

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
          containerStyle={styles.genderContainerStyle}
        />
        <Field
          title='Name'
          placeholder='Name'
          name='name'
          component={TextField}
          containerStyle={styles.textField}
        />
        <Field
          title='Date of birth'
          placeholder='Date of birth'
          name='dob'
          component={TextField}
          containerStyle={styles.textField}
        />
        <Field
          title='Interests'
          placeholder='Interests'
          name='interests'
          component={TextField}
          containerStyle={styles.textField}
        />
        <Field
          title='About me'
          placeholder='About me'
          name='personalInfo'
          component={TextField}
          containerStyle={styles.textField}
        />
      </View>
    );
  }
}

ProfileForm.propTypes = {
  shynee: PropTypes.object,
  initialize: PropTypes.func
};

export default reduxForm({
  form: 'profileEditFrom',
  //TODO: Добавить отправку данных
  onSubmit: ()=>{}
})(ProfileForm);
