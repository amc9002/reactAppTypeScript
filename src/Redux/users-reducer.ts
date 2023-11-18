import { UserType, UsersStateType } from '.././types'
import { usersAPI } from '../API/api';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING"
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE-IS-FOLLOWING-PROGRESS"

let initialState: UsersStateType = {
    users: [],
    pageSize: 100,
    totalCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

const usersReducer = (state: UsersStateType = initialState, action: any): UsersStateType => {
    switch (action.type) {
        case FOLLOW: return FollowSwitch(state, action.userId, true);
        case UNFOLLOW: return FollowSwitch(state, action.userId, false);
        case SET_USERS: return { ...state, users: action.users };
        case SET_CURRENT_PAGE: return { ...state, currentPage: action.currentPage };
        case SET_TOTAL_USERS_COUNT: return { ...state, totalCount: action.totalCount };
        case TOGGLE_IS_FETCHING: return { ...state, isFetching: action.isFetching };
        case TOGGLE_IS_FOLLOWING_PROGRESS: return {
            ...state,
            followingInProgress: action.isFetching
                ? [...state.followingInProgress, action.userId ]
                : state.followingInProgress.filter(id => id != action.userId)
        };
        default: return state;
    }
}

const FollowSwitch = (state: UsersStateType, userId: number, isFollowed: boolean): UsersStateType => {
    return {
        ...state,
        users: state.users.map(u => {
            if (u.id === userId) return { ...u, followed: isFollowed };
            return u;
        })
    };
}


export const followSuccess = (userId: number): { userId: number, type: typeof FOLLOW } => ({ type: FOLLOW, userId });
export const unfollowSuccess = (userId: number): { userId: number, type: typeof UNFOLLOW } => ({ type: UNFOLLOW, userId });
export const setUsers = (users: Array<UserType>): { type: typeof SET_USERS, users: Array<UserType> } => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage: number): { type: typeof SET_CURRENT_PAGE, currentPage: number } =>
    ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalUsersCount = (totalCount: number): { type: typeof SET_TOTAL_USERS_COUNT, totalCount: number } =>
    ({ type: SET_TOTAL_USERS_COUNT, totalCount });
export const toggleIsFetching = (isFetching: boolean): { type: typeof TOGGLE_IS_FETCHING, isFetching: boolean } =>
    ({ type: TOGGLE_IS_FETCHING, isFetching });
export const toggleFollowingProgress = (isFetching: boolean, userId: number): { type: typeof TOGGLE_IS_FOLLOWING_PROGRESS, isFetching: boolean, userId: number } =>
    ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId }); 

export const getUsers = (currentPage: number, pageSize: number): Function => {
    return (dispatch: Function): void => {
        dispatch(toggleIsFetching(true));
        usersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(toggleIsFetching(false));
                dispatch(setUsers(data.items));
                dispatch(setTotalUsersCount(data.totalCount))
            });
    }
}

export const follow = (userId: number): Function => {
    return (dispatch: Function): void => {
        dispatch(toggleFollowingProgress(true, userId));
        usersAPI.follow(userId)
        .then(data => {
            if (data.resultCode == 0)
                dispatch(followSuccess(userId))
            dispatch(toggleFollowingProgress(false, userId));
        });    
    }
}

export const unfollow = (userId: number): Function => {
    return (dispatch: Function): void => {
        dispatch(toggleFollowingProgress(true, userId));
        usersAPI.unfollow(userId)
            .then(data => {
                if (data.resultCode == 0)
                    dispatch(unfollowSuccess(userId))
                dispatch(toggleFollowingProgress(false, userId));
            });
    }
}

export default usersReducer;