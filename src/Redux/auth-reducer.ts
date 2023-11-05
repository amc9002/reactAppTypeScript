import { UserType, AuthStateType } from '../types'

const SET_USER_DATA = 'SET_USER_DATA';

let initialState: AuthStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
    //isFetching: false
}

const authsReducer = (state: AuthStateType = initialState, action: any): AuthStateType => {
    switch (action.type) {
        case SET_USER_DATA: return {
            ...state,
            ...action.data,
            isAuth: true
        };

        /*case TOGGLE_IS_FETCHING: return { ...state, isFetching: action.isFetching };*/
        default: return state;
    }
}


export const setAuthUserData = (userId: number | null, email: string | null, login: string | null): { type: typeof SET_USER_DATA, data: AuthStateType } =>
    ({ type: SET_USER_DATA, data: { userId, email, login, isAuth: false } });

//export const toggleIsFetching = (isFetching: boolean): { type: typeof TOGGLE_IS_FETCHING, isFetching: boolean } =>
//    ({ type: TOGGLE_IS_FETCHING, isFetching });

export default authsReducer;