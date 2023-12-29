import { authAPI } from '../API/api';
import { AuthStateType } from '../types'

const SET_USER_DATA = 'SET_USER_DATA';

let initialState: AuthStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authsReducer = (state: AuthStateType = initialState, action: any): AuthStateType => {
    switch (action.type) {
        case SET_USER_DATA: return {
            ...state,
            ...action.data,
            isAuth: true
        };

        default: return state;
    }
}

type AuthUserDataType = {type: typeof SET_USER_DATA, data: AuthStateType}
const setAuthUserData = (userId: number | null, email: string | null, login: string | null): AuthUserDataType =>
    ({ type: SET_USER_DATA, data: { userId, email, login, isAuth: false } });

export const getAuthUserData = (): Function => {
    return (dispatch: Function) => {
        authAPI.getMe()
            .then(data => {
                if (data.resultCode === 0) {
                    let { id, email, login } = data.data;
                    dispatch(setAuthUserData(id, email, login));
                }
            });
    }
}

export default authsReducer;