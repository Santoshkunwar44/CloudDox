import { Dispatch } from "redux";
import { userType } from "../../utils/types/types";
import { ActionTypes } from "./actionTypes"
import { Action } from ".";

export const AddUserAction = (payload: userType) => (dispatch: Dispatch<Action>) => {

    return dispatch({
        type: ActionTypes.ADD_USER,
        payload
    })
}
export const RemoveUserAction = () => (dispatch: Dispatch) => {

    return dispatch({
        type: ActionTypes.REMOVE_USER,
    })
}

export const refreshAction = () => (dispatch: Dispatch) => {
    return dispatch({
        type: ActionTypes.REFRESH
    })
}