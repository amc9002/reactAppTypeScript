const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS'

type LocationType = {
    city: string
    country: string
}

type UserType = {
    id: number,
    name: string,
    status: string
    location: LocationType
    ava: string
    followed: boolean
}

export type StateType = {
    users: Array<UserType>,
}

let initialState: StateType = {
    users: [
        {
            id: 0,
            name: 'Mike',
            status: "Life is nice!",
            location: {
                city: "Boston",
                country: "United States",
            },
            ava: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/ea7a3c32163929.567197ac70bda.png",
            followed: true
        },
        {
            id: 1,
            name: 'Andris',
            status: "Not sure (",
            location: {
                city: "Miensk",
                country: "Bielarus",
            },
            ava: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHCZuslFbn42wwA9qw6ywBERhtpr_yOFy3Cw&usqp=CAU",
            followed: true
        },
        {
            id: 2,
            name: 'Kandrat',
            status: "I want to sail",
            location: {
                city: "Kaczyna",
                country: "Bielarus",
            },
            ava: "https://i.kinja-img.com/gawker-media/image/upload/t_original/ijsi5fzb1nbkbhxa2gc1.png",
            followed: true
        },
        {
            id: 3,
            name: 'Anela',
            status: "I'm tired of you all",
            location: {
                city: "Tatarszczyna",
                country: "Bielarus",
            },
            ava: "https://alitech.com.ng/wp-content/uploads/2020/06/IMG_20200603_114713-e1592183490881.jpg",
            followed: true
        },
        {
            id: 4,
            name: 'Jakub',
            status: "I just want to play games",
            location: {
                city: "Kaczyna",
                country: "Bielarus",
            },
            ava: "https://i.kinja-img.com/gawker-media/image/upload/t_original/ijsi5fzb1nbkbhxa2gc1.png",
            followed: true
        },
    ],
}

const usersReducer = (state: StateType = initialState, action: any): StateType => {
    switch (action.type) {
        case FOLLOW: {
            return FollowSwitch(state, action.userId, true);
        }
        case UNFOLLOW: {
            return FollowSwitch(state, action.userId, false);
        }
        case SET_USERS: {
            return {
                ...state, users: [...state.users, ...action.users] };
        }
        default:
            return state;
    }
}

const FollowSwitch = (state: StateType, userId: number, isFollowed: boolean): StateType => {
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
export const SetUsersAC = (users: Array<UserType>): SetUsersACType => ({ type: SET_USERS , users})

export default usersReducer;