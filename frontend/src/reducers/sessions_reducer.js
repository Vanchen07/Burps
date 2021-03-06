import {
    RECEIVE_CURRENT_USER,
    RECEIVE_USER_LOGOUT,
} from '../actions/session_actions';

const initialState = {
    isAuthenticated: false,
    currentUser: undefined
};

export default function (state = initialState, action) {
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            // debugger
            return {
              ...state,
              isAuthenticated: !!action.currentUser,
              currentUser: action.currentUser.data._id,
            };
        case RECEIVE_USER_LOGOUT:
            return {
                isAuthenticated: false,
                currentUser: undefined
            };
        default:
            return state;
    }
}