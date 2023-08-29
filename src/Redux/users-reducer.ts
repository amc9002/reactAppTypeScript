import { UserType, UsersStateType } from '.././types'

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'

let initialState: UsersStateType = {
    users: [],
    pageSize: 100,
    totalCount: 0,
    currentPage: 4,
}

const usersReducer = (state: UsersStateType = initialState, action: any): UsersStateType => {
    switch (action.type) {
        case FOLLOW: {
            return FollowSwitch(state, action.userId, true);
        }
        case UNFOLLOW: {
            return FollowSwitch(state, action.userId, false);
        }
        case SET_USERS: {
            return {
                ...state, users: action.users };
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state, currentPage: action.currentPage
            };
        }
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state, totalCount: action.totalCount
            };
        }
        default:
            return state;
    }
}

const FollowSwitch = (state: UsersStateType, userId: number, isFollowed: boolean): UsersStateType => {
    return {
        ...state,
        users: state.users.map(u => {
            if (u.id === userId)
                return { ...u, followed: isFollowed };
            return u;
        })
    };
}

type FollowACType = { userId: number, type: typeof FOLLOW }
export const FollowAC = (userId: number): FollowACType => ({ userId, type: FOLLOW })

type UnFollowACType = { userId: number, type: typeof UNFOLLOW }
export const UnFollowAC = (userId: number): UnFollowACType => ({ userId, type: UNFOLLOW })

type SetUsersACType = { type: typeof SET_USERS, users: Array<UserType> }
export const SetUsersAC = (users: Array<UserType>): SetUsersACType => ({ type: SET_USERS, users })

type SetCurrentPageACType = { type: typeof SET_CURRENT_PAGE, currentPage: number }
export const SetCurrentPageAC = (currentPage: number): SetCurrentPageACType =>
    ({ type: SET_CURRENT_PAGE, currentPage })

type SetTotalUsersCountACType = { type: typeof SET_TOTAL_USERS_COUNT, totalCount: number }
export const SetTotalUsersCountAC = (totalCount: number): SetTotalUsersCountACType =>
    ({ type: SET_TOTAL_USERS_COUNT, totalCount })

export default usersReducer;