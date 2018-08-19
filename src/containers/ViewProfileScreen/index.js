import React from 'react';

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

export default ViewProfileScreen;
