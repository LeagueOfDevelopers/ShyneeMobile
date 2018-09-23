export const CHAT_LIST_REQUEST = 'CHAT_LIST_REQUEST';
export const CHAT_LIST_SUCCESS = 'CHAT_LIST_SUCCESS';
export const CHAT_LIST_FAILURE = 'CHAT_LIST_FAILURE';
export const getChatList = (shyneeId, token) => async (dispatch) => {
  dispatch({
    type: CHAT_LIST_REQUEST
  });

  //todo: use request when backend provide it
  await new Promise(resolve => setTimeout(resolve, 200));
  dispatch({
    type: CHAT_LIST_SUCCESS,
    payload: {
      'chatId1': {
        id: 'chatId1',
        targetShyneeId: 'shyneeId1',
        targetShyneeAvatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/joelhelin/128.jpg',
        targetShyneeNickname: 'Nickname1',
        lastMessage: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mauris lorem, vestibulum.',
        lastMessageDate: new Date('2018-05-23T15:00:00')
      },
      'chatId2': {
        id: 'chatId2',
        targetShyneeId: 'shyneeId2',
        targetShyneeAvatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/joelhelin/128.jpg',
        targetShyneeNickname: 'Nickname2',
        lastMessage: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mauris lorem, vestibulum.',
        lastMessageDate: new Date('2018-06-23T15:00:00')
      },
      'chatId3': {
        id: 'chatId3',
        targetShyneeId: 'shyneeId3',
        targetShyneeAvatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/joelhelin/128.jpg',
        targetShyneeNickname: 'Nickname3',
        lastMessage: 'Lorem ipsum dolor.',
        lastMessageDate: new Date('2018-07-23T15:00:00')
      },
      'chatId4': {
        id: 'chatId4',
        targetShyneeId: 'shyneeId4',
        targetShyneeAvatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/joelhelin/128.jpg',
        targetShyneeNickname: 'Nickname4',
        lastMessage: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mauris lorem, vestibulum.',
        lastMessageDate: new Date('2018-08-23T15:00:00')
      },
      'chatId5': {
        id: 'chatId5',
        targetShyneeId: 'shyneeId5',
        targetShyneeAvatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/joelhelin/128.jpg',
        targetShyneeNickname: 'Nickname5',
        lastMessage: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mauris lorem, vestibulum.',
        lastMessageDate: new Date('2018-09-23T15:00:00')
      }
    }
  });
};