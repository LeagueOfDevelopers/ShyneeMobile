import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, FlatList } from 'react-native';

import ChatListItem from './ChatListItem';

import styles from './styles';

class ChatList extends PureComponent {
  renderSeparator() {
    return (<View style={styles.separator} />);
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.chatList}
          extraData={this.props.chatList}
          renderItem={({ item }) => <ChatListItem {...item} navigation={this.props.navigation} />}
          ItemSeparatorComponent={this.renderSeparator}
          keyExtractor={(item) => item.id}
          style={styles.list}          
        />
      </View>
    );
  }
}

ChatList.propTypes = {
  navigation: PropTypes.object,
  dispatch: PropTypes.func,
  shyneeId: PropTypes.string,
  token: PropTypes.string,
  chatList: PropTypes.array
};

export default ChatList;
