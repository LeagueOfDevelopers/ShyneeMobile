import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, Text } from 'react-native';

import { CHAT } from '../../../constants/screens';
import Touchable from '../../Touchable';

import styles from './styles';

const ChatListItem = ({
  id, targetShyneeId, targetShyneeAvatar, targetShyneeNickname, lastMessage, lastMessageDate, navigation
}) =>
  (
    <Touchable onPress={() => navigation.navigate(CHAT) }>
      <View style={styles.container}>
        <View style={styles.avatarContainer}>
          <Image style={styles.avatar} source={{ uri: targetShyneeAvatar }} />
        </View>
        <View style={styles.content}>
          <Text style={styles.nickname} ellipsizeMode='tail' numberOfLines={1}>{targetShyneeNickname}</Text>
          <Text style={styles.lastMessage} ellipsizeMode='tail' numberOfLines={2}>{lastMessage}</Text>
        </View>
        <Text style={styles.time}>15:15</Text>
      </View>
    </Touchable>
  );

ChatListItem.propTypes = {
  id: PropTypes.string,
  targetShyneeId: PropTypes.string,
  targetShyneeAvatar: PropTypes.string,
  targetShyneeNickname: PropTypes.string,
  lastMessage: PropTypes.string,
  lastMessageDate: PropTypes.instanceOf(Date),
  navigation: PropTypes.object
};

export default ChatListItem;
