import React from 'react';
import PropTypes from 'prop-types';
import Platform from 'Platform';
import {Animated, View} from 'react-native';
import { connect } from 'react-redux';

import {fonts, colors} from '../../constants/styles';
import {getShyneesAround} from '../../actions/shynees';
import ShyneesAround from '../../components/ShyneesAround';
import Button from '../../components/Button';
import Text from '../../components/Text';

import styles from './styles';

class ShyneesAroundScreen extends React.Component {
  componentDidMount() {
    this.props.dispatch(getShyneesAround());
  }

  render() {
    const {navigation, shyneesAround} = this.props;
    return <ShyneesAround navigation={navigation} shynees={shyneesAround} />;
  }
}

ShyneesAroundScreen.navigationOptions = ({navigation}) => {
  const { params = {} } = navigation.state;
  return {
    title: 'Shynees Around',
    headerTitleAllowFontScaling: false,
    header: <Animated.View style={{height: params.headerHeight}}>
      <View style={styles.headerContainer}>
        <Animated.View style={[styles.titleContainer, {backgroundColor: params.headerBackgoundColor}]}>
          <Text style={[styles.title, {color: params.headerColor}]}>Shynees Around</Text>
        </Animated.View>
      </View>
      {params.iAmReadyVisible && <Button
        title="I AM READY"
        style={{position: 'absolute', top: params.headerIndent, width: '100%'}}
        type='colorful'
      />}
    </Animated.View>
  };
};

ShyneesAroundScreen.propTypes = {
  navigation: PropTypes.object,
  dispatch: PropTypes.func,
  shyneesAround: PropTypes.object
};

const mapStateToProps = state => ({
  shyneesAround: state.shyneesAround
});

export default connect(mapStateToProps)(ShyneesAroundScreen);
