import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {View, ScrollView } from 'react-native';

import Text from '../Text';
import Button from '../Button';
import ShyneeItem from './ShyneeItem';
import {SETTINGS} from '../../constants/screens';

import styles from './styles';

class ShyneesAroundScreen extends PureComponent {
  state = {
    shyneeSize: {
      width: null,
      height: null
    }
  }

  onRenderShyneesAround = (event) => {
    const COLUMNS = 3;
    const { width } = event.nativeEvent.layout;

    const shyneeWidth = width/COLUMNS;
    const shyneeHeight = shyneeWidth * 4/3;

    this.setState({
      shyneeSize: {
        width: shyneeWidth,
        height: shyneeHeight
      }
    });
  }

  render() {
    const {shyneeSize} = this.state;
    const {navigation, shynees} = this.props;
    return (
      <ScrollView>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
        </View>
        <Button
          title="I am ready"
          onPress={() => navigation.navigate(SETTINGS)}
          style={styles.buttonContainer}
        />
        <View style={styles.shyneesAroundContainer} onLayout={this.onRenderShyneesAround}>
          {shynees.map(shynee => <ShyneeItem 
            key={shynee.id}
            shynee={shynee}
            navigation={navigation}
            size={shyneeSize}
          />)}
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
