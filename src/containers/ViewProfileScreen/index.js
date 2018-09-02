import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Loader from '../../components/Loader';
import ViewProfile from '../../components/ViewProfile';
import {getViewingProfile} from '../../actions/viewingProfile';

class ViewProfileScreen extends React.PureComponent {
  state={
    loading: true
  }

  async componentDidMount() {
    const {dispatch, navigation} = this.props;
    await dispatch(getViewingProfile(navigation.getParam('shyneeId')));
    this.setState({loading: false});
  }
  
  render() {
    if (!this.state.loading) {
      return <ViewProfile {...this.props} />;
    }
    return <Loader />;
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
  shynee: state.viewingProfile,
});

export default connect(mapStateToProps)(ViewProfileScreen);
