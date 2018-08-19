import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {View, Button} from 'react-native';
import { connect } from 'react-redux';

import Text from '../Text';
import ProfileCard from '../ProfileCard';
import {CHAT} from '../../constants/screens';
import {getShyneeProfile} from '../../actions/profile';

class ViewProfile extends PureComponent {
  componentDidMount() {
    const {dispatch, navigation} = this.props;
    dispatch(getShyneeProfile(navigation.getParam('shyneeId')));
  }

  render() {
    const {shynee, navigation } = this.props;
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ProfileCard shynee={shynee}/>
        <Text>View Profile!</Text>
        <Button
          title="Go to Chat"
          onPress={() => navigation.navigate(CHAT)}
        />
      </View>
    );
  }
}

ViewProfile.propTypes = {
  navigation: PropTypes.object,
  dispatch: PropTypes.func,
  shynee: PropTypes.object,
};

const mapStateToProps = state => ({
  shynee: state.shyneeProfile.shynee
});

export default connect(mapStateToProps)(ViewProfile);
