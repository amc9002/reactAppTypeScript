
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