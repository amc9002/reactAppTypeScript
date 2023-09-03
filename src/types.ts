
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

export type ProfileStateType = {
    currentPost: string,
    posts: Array<PostType>,
    pictureLinks: PictureLinksType
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