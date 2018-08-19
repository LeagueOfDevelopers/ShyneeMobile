import { SETTINGS_UPDATE_REQUEST, SETTINGS_UPDATE_SUCCESS, SETTINGS_UPDATE_FAILURE } from '../actions/settings';
const initialState = {
  status: 'Ну тыкай, чего ждешь...'
};

export default function (state = initialState, action) {
  switch (action.type) {
  case SETTINGS_UPDATE_REQUEST:
    return {
      status:'Чекаю'
    };
  case SETTINGS_UPDATE_SUCCESS:
    return {
      status:'Да ты красавчик!'
    };
  case SETTINGS_UPDATE_FAILURE:
    return {
      status:'Все говно...('
    };
  default:
    return state;
  }
}
