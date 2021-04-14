import { SIGNIN, SIGNOUT } from '../actions/auth';

const initialState = {
  name: null,
  email: null,
  phoneNumber: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNIN:
      return {
        name: action.name,
        email: action.email,
        phoneNumber: action.phoneNumber,
      };
    case SIGNOUT:
      return initialState;
    default:
      return state;
  }
};

export default authReducer;
