import React from 'react';

import Loader from '../Loader';

const Loadable = ({ isLoading, children }) => {
  if (isLoading) {
    return <Loader />;
  }

  return children;
};

export default Loadable;
