import { combineReducers } from "redux";

const initialState = {
  username: {},
};
  
const usernameReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USERNAME':
      return {
        ...state,
        username: action.payload,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  username: usernameReducer
});

export default rootReducer;
