import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {ScrollView, View} from 'react-native';

import Text from '../Text';
import ProfileCard from '../ProfileCard';
import TabMenu from '../TabMenu';
import {CHAT} from '../../constants/screens';

import styles from './styles';

const Info = ({shynee}) => <View style={styles.info}>
  {shynee.name ? <View style={styles.infoItem}>
    <Text style={styles.itemName}>NAME</Text>
    <Text style={styles.itemValue}>{shynee.name}</Text>
  </View> : null}
  {shynee.dob ? <View style={styles.infoItem}>
    <Text style={styles.itemName}>DATE OF BIRTH</Text>
    <Text style={styles.itemValue}>{shynee.dob}</Text>
  </View> : null}
  {shynee.gender ? <View style={styles.infoItem}>
    <Text style={styles.itemName}>SEX</Text>
    <Text style={styles.itemValue}>{shynee.gender}</Text>
  </View> : null}
  {shynee.interests ? <View style={styles.infoItem}>
    <Text style={styles.itemName}>INTERESTS</Text>
    <View style={styles.interests}>{
      ['ablab', 'lalab'].map((interest, index) => 
        <View key={index} style={styles.interestContainer}>
          <Text style={styles.interest}>{interest}</Text>
        </View>
      )}
    </View>
  </View> : null}
  {shynee.personalInfo ? <View style={styles.infoItem}>
    <Text style={styles.itemName}>ABOUT ME</Text>
    <Text style={styles.itemValue}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium optio, fugiat eos rem suscipit magnam adipisci illum, quod a omnis possimus distinctio explicabo in earum minus sit atque reprehenderit similique!</Text>
  </View> : null}
</View>;

const NoInfo = () => <View style={styles.noInfoContainer}>
  <View style={styles.noInfo}>
    <Text style={styles.noInfoPity}>Unfontunaley, no info about Florence Adams is public.</Text>
    <Text style={styles.noInfoSuggestion}>You can still have a nice talk!</Text>
  </View>
</View>;

class ViewProfile extends PureComponent {
  constructor(props) {
    super(props);
    
    const {name, dob, gender, interests, personalInfo} =    props.shynee;
    this.infoExist = name || dob || gender || interests || personalInfo ? true : false;
  }

  getTabs = () => {
    const tabs = [{
      title: 'Chat',
      onPress: () => this.props.navigation.navigate(CHAT)
    }];
    if (this.infoExist) tabs.unshift({
      title: 'Reveal info',
      onPress: () => {}
    });
    return tabs;
  }

  render() {
    const {shynee} = this.props;
    return (
      <ScrollView>
        <View style={styles.topContent}>
          <ProfileCard style={{marginTop: 8}} shynee={shynee} />
          <TabMenu tabs={this.getTabs()} style={styles.tabMenu}/>
        </View>
        <View style={styles.content}>
          {this.infoExist ?  <Info shynee={shynee} /> : <NoInfo />}
        </View>
      </ScrollView>
    );
  }
}

ViewProfile.propTypes = {
  navigation: PropTypes.object,
  dispatch: PropTypes.func,
  shynee: PropTypes.object,
};

Info.propTypes = {
  shynee: PropTypes.object,
};

export default ViewProfile;
