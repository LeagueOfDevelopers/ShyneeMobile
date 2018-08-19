import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ViewProfile from '../../components/ViewProfile';
import {getShyneeProfile} from '../../actions/shynees';

class ViewProfileScreen extends React.PureComponent {
  componentDidMount() {
    const {dispatch, navigation} = this.props;
    dispatch(getShyneeProfile(navigation.getParam('shyneeId')));
  }
  
  render() {
    return (
      <ViewProfile {...this.props}/>
    );
  }
}

ViewProfileScreen.navigationOptions = {
  title: 'View Profile',
};

ViewProfileScreen.propTypes = {
  navigation: PropTypes.object,
  dispatch: PropTypes.func,
  shynee: PropTypes.object,
};

const mapStateToProps = state => ({
  shynee: state.shyneeProfile.shynee.data,
});

export default connect(mapStateToProps)(ViewProfileScreen);
