import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, FlatList } from 'react-native';

import ChatListItem from './ChatListItem';
import Loadable from '../Loadable';

import styles from './styles';

class ChatList extends PureComponent {
  renderSeparator() {
    return (<View style={styles.separator} />);
  }

  prepareData() {
    const { data } = this.props.chatList;
    const chatListItems = [];
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        chatListItems.push(data[key]);
      }
    }

    return chatListItems.sort((item1, item2) => item1.lastMessageDate < item2.lastMessageDate ? 1 : -1);
  }

  render() {
    return (
      <Loadable isLoading={this.props.chatList.fetching}>
        <View style={styles.container}>
          <FlatList
            data={this.prepareData()}
            renderItem={({ item }) => <ChatListItem {...item} navigation={this.props.navigation} />}
            ItemSeparatorComponent={this.renderSeparator}
            keyExtractor={(item) => item.id}
            style={styles.list}
          />
        </View>
      </Loadable>
    );
  }
}

ChatList.propTypes = {
  navigation: PropTypes.object,
  dispatch: PropTypes.func,
  shyneeId: PropTypes.string,
  token: PropTypes.string,
  chatList: PropTypes.object
};

export default ChatList;
