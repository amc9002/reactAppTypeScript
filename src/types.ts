
export type MenuButtonType = {
    id: number,
    link: string,
    navLink: string
}

export type AuthStateType = {
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
    //isFetching: boolean
    }

export type UserType = {
    id: number,
    name: string,
    status: string
    photos: { small: string, large: string }
    followed: boolean
} 

export type UsersStateType = {
    users: Array<UserType>,
    pageSize: number,
    totalCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: Array<number>
}

export type PostType = {
    id: number,
    msg: string,
    likes: number
}

export type ProfileType = {
    aboutMe: string | null
    contacts: {
        facebook: string | null
        website: string | null
        vk: string | null
        twitter: string | null
        instagram: string | null
        youtube: string | null
        github: string | null
        mainLink: string | null
    }
    lookingForAJob: boolean | null
    lookingForAJobDescription: string | null
    fullName: string | null
    userId: number | null
    photos: { small: string | null, large: string | null }
}

export type ProfileStateType = {
    currentPost: string,
    posts: Array<PostType>
    pictureLinks: {
        profilePicLink: string,
        avaLink: string
    }
    profile: ProfileType
}

export type DialogType = {
    id: number
    name: string
    ava: string | null
}

export type MessageType = {
    id: number
    msg: string
}

export type DialogsStateType = {
    dialogs: Array<DialogType>
    currentMessage: string
    messages: Array<MessageType>
    
}


