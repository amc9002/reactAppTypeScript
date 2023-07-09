const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

type PostType = {
    id: number,
    msg: string,
    likes: number
}

type PictureLinksType = {
    profilePicLink: string | null,
    avaLink: string | null
}

export type ProfileStateType = {
    currentPost: string,
    posts: Array<PostType>,
    pictureLinks: PictureLinksType
}

let initialState: ProfileStateType = {
    currentPost: "New post here",
    posts: [
        { id: 0, msg: "Hello World!", likes: 20, },
        { id: 1, msg: "Nice weather today", likes: 40, },
        { id: 2, msg: "Go to drink!", likes: 10, },
        { id: 3, msg: "Yohoho!", likes: 100, },
    ],

    pictureLinks: {
        profilePicLink: "https://www.uu.se/digitalAssets/805/c_805646-l_1-k_image.jpg",
        avaLink: "https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg",
    }
}


const profileReducer = (state: ProfileStateType = initialState, action: any): ProfileStateType => {
    switch (action.type) {
        case UPDATE_POST_TEXT: //action.newText required 
            return {
                ...state,
                currentPost: action.newText
            }

        case ADD_POST:
            if (!state.currentPost.match(/^[\wà-ÿÀ-ß]+/gi)) return state;
            return {
                ...state,
                posts: [...state.posts,
                {
                    id: state.posts[state.posts.length - 1].id + 1,
                    msg: state.currentPost,
                    likes: 100
                }],
                currentPost: ''
            }

        default:
            return state;
    }
}

type AddPostActionCreatorType = { type: typeof ADD_POST }

export const addPostActionCreator = (): AddPostActionCreatorType => ({ type: ADD_POST })

type updatePostTextActionCreatorType = {
    type: typeof UPDATE_POST_TEXT,
    newText: string
}

export const updatePostTextActionCreator = (text: string): updatePostTextActionCreatorType => {
    return {
        type: UPDATE_POST_TEXT,
        newText: text
    }
}

export default profileReducer;