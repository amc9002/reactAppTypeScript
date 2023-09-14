
export type MenuButtonType = {
    id: number,
    link: string,
    navLink: string
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
}

export type PostType = {
    id: number,
    msg: string,
    likes: number
}

export type PictureLinksType = {
    profilePicLink: string,
    avaLink: string
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
    pictureLinks: PictureLinksType
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

export type DialogsPropsType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    currentMessage: string
    addNewMessage: Function
    changeMessage: Function
}

export type UsersPropsType = {
    totalCount: number
    pageSize: number
    currentPage: number
    onPageChanged: Function
    users: Array<UserType>
    followUser: Function
    unFollowUser: Function
}

export type PreloaderPropsType = {
    size: number
}