import React from 'react';
import PropTypes from 'prop-types';
import {Image} from 'react-native';
import PhotoUpload from 'react-native-photo-upload';

import styles from './styles';

const AvatarField = (
  {
    input
  }
) => {
  return (
    <PhotoUpload
      containerStyle={styles.photoUpload}
      onPhotoSelect={input.onChange}
    >
      <Image style={styles.avatar} source={{uri: input.value}}/>
    </PhotoUpload>
  );
};

AvatarField.propTypes = {
  input: PropTypes.object,
};

export default AvatarField;
