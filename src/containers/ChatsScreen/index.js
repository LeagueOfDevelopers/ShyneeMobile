import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {View} from "react-native";

import Touchable from '../../components/Touchable/index'
import ChatList from '../../components/ChatList';
import { chatListSelector } from '../../selectors/chats';
import { shyneeCredentialsSelector } from '../../selectors/shynee';
import { getChatList } from '../../actions/chats';
import { SettingsIcon } from '../../components/HeaderButton/Icon/index'
import { SETTINGS } from '../../constants/screens' 


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

ChatsScreen.navigationOptions = ({navigation}) => {
  return{
    title: 'Chats',
    headerRight: <View>
      <Touchable onPress={() => navigation.navigate(SETTINGS)}>
        <View>
          <SettingsIcon/>
        </View>
      </Touchable>
    </View>
  }
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
