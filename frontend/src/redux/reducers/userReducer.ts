import { UserType } from "../../utils/types/types";
import { Action } from "../actions";
import { ActionTypes } from "../actions/actionTypes";

export interface UserState {
    user: null | UserType
}
const INITIAL_USERSTATE = {
    user: null,
};

const UserReducer = (state: UserState = INITIAL_USERSTATE, action: Action) => {
    switch (action.type) {
        case ActionTypes.ADD_USER:
            return { ...state, user: action.payload };

        case ActionTypes.REMOVE_USER:
            return { ...state, user: null };

        default:
            return state;
    }
};

export default UserReducer;