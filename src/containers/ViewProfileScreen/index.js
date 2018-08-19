import React from 'react';
import PropTypes from 'prop-types';

import ViewProfile from '../../components/ViewProfile';

class ViewProfileScreen extends React.PureComponent {
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
};

export default ViewProfileScreen;
