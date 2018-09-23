import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ChatList from '../../components/ChatList';
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

    return (
      <ChatList
        navigation={navigation}
        dispatch={dispatch}
        shyneeId={shyneeId}
        token={token}
        chatList={chatList}
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
