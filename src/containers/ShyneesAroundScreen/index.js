import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {View, Text, Button, ScrollView, Image } from 'react-native';

import {VIEW_PROFILE, SETTINGS} from '../../constants/screens';
import {getShyneesAround} from '../../actions/shynees';

class ShyneesAroundScreen extends React.Component {
  componentDidMount() {
    this.props.dispatch(getShyneesAround());
  }

  render() {
    return (
      <ScrollView style={{paddingLeft: 27, paddingRight:27}}>
        <View style={{ alignItems: 'center'}}>
          <Text style={{maxWidth: '70%' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
        </View>
        <Button
          title="Go to View Profile"
          onPress={() => this.props.navigation.navigate(VIEW_PROFILE)}
        />
        <Button
          title="Go to Settings"
          onPress={() => this.props.navigation.navigate(SETTINGS)}
        />
        <View style={{flexWrap: 'wrap', flexDirection:'row'}}>
          {this.props.shyneesAround.map((shynee => 
            <View key={shynee.id} style={{flexBasis: '33%'}}>
              <View style={{margin: 4, height:100}}>
                <Image style={{width:'100%', height:100}} source={require('./avatar.jpg')}/>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    );
  }
}

ShyneesAroundScreen.navigationOptions = {
  title: 'Shynees Around',
};

ShyneesAroundScreen.propTypes = {
  navigation: PropTypes.object,
  dispatch: PropTypes.func,
  shyneesAround: PropTypes.array
};

const mapStateToProps = state => ({
  shyneesAround: state.shyneesAround.data
});

export default connect(mapStateToProps)(ShyneesAroundScreen);
