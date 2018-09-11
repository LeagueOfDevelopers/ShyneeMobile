import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {View, Image} from 'react-native';
import { reduxForm, Field } from 'redux-form';

import TextField from './TextField';

import styles from './styles';

class ProfileForm extends PureComponent {
  render() {
    const {shynee} = this.props;
    return (
      <View>
        <View style={{...styles.card}}>
          <Image style={styles.avatar} source={{uri: shynee.avatarUri}}/>
          <Field title='Nickname*' name='nickname' placeholder='Nickname*' component={TextField} />
        </View>
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
};

export default reduxForm({ form: 'profileEdit' })(ProfileForm);
