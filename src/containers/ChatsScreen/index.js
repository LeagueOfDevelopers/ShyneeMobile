import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ChatList from '../../components/ChatList';
import Loader from '../../components/Loader';
import { chatListSelector } from '../../selectors/chats';
import { shyneeCredentialsSelector } from '../../selectors/shynee';
import { getChatList } from '../../actions/chats';

class ChatsScreen extends React.Component {
  componentDidMount() {
    const { dispatch, shyneeId, token } = this.props;
    dispatch(getChatList(shyneeId, token));
  }

  render() {
    const { navigation, dispatch, shyneeId, token, chatList } = this.props;
    const { fetching, data } = chatList;
    if (fetching) {
      return <Loader />;
    }

    const chatListItems = [];
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        chatListItems.push(data[key]);        
      }
    }

    const sortedChatListItems = chatListItems.sort((item1, item2) => item1.lastMessageDate >= item2.lastMessageDate ? 1 : -1);

    return (
      <ChatList
        navigation={navigation}
        dispatch={dispatch}
        shyneeId={shyneeId}
        token={token}
        chatList={sortedChatListItems}
      />
    );
  }
}

ChatsScreen.navigationOptions = {
  title: 'Chats',
};

ChatsScreen.propTypes = {
  navigation: PropTypes.object,
  dispatch: PropTypes.func,
  shyneeId: PropTypes.string,
  token: PropTypes.string,
  chatList: PropTypes.object
};

const mapStateToProps = (state) => ({
  ...shyneeCredentialsSelector(state),
  chatList: chatListSelector(state)
});

export default connect(mapStateToProps)(ChatsScreen);
