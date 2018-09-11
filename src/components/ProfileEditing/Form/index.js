import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {ScrollView, View} from 'react-native';
import { reduxForm, Field } from 'redux-form';

import TabMenu from '../../TabMenu';
import TextField from '../../Form/TextField';

import styles from './styles';

class ProfileForm extends PureComponent {
  //TODO: Подумать, как можно сделать иначе
  componentDidMount() {
    this.props.onRef(this);
  }
  componentWillUnmount() {
    this.props.onRef(undefined);
  }

  getTabs = () => {
    const tabs = [{
      title: 'Profile Info',
      active: true,
      onPress: () => {}
    },{
      title: 'Privacy settings',
      onPress: () => {}
    }];
    return tabs;
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.content}>
          <TabMenu 
            tabs={this.getTabs()}
            type='underlined'
            tabStyle={styles.tab}
            textStyle={styles.tabText}
          />
          <Field
            name={'name'}
            component={TextField}
          />
        </View>
      </ScrollView>
    );
  }
}

ProfileForm.propTypes = {
  onRef: PropTypes.func,
};

export default reduxForm({ form: 'profileEdit' })(ProfileForm);
