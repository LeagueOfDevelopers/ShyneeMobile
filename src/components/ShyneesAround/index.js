import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {View, Text, ScrollView } from 'react-native';

import Button from '../Button';
import ShyneeItem from './ShyneeItem';
import {SETTINGS} from '../../constants/screens';

import styles from './styles';

class ShyneesAroundScreen extends PureComponent {
  render() {
    const {navigation, shynees} = this.props;
    return (
      <ScrollView>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
        </View>
        <Button
          title="Go to Settings"
          onPress={() => navigation.navigate(SETTINGS)}
          style={styles.buttonContainer}
        />
        <View style={styles.shyneesAroundContainer}>
          {shynees.map(shynee => <ShyneeItem key={shynee.id} shynee={shynee} navigation={navigation} />)}
        </View>
      </ScrollView>
    );
  }
}

ShyneesAroundScreen.propTypes = {
  navigation: PropTypes.object,
  shynees: PropTypes.array
};

export default ShyneesAroundScreen;
