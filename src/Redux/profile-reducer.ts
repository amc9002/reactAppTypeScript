import { ProfileStateType, ProfileType } from "../types";

const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

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
    },

    profile: {
        aboutMe: null,
        contacts: {
            facebook: null,
            website: null,
            vk: null,
            twitter: null,
            instagram: null,
            youtube: null,
            github: null,
            mainLink: null
        },
        lookingForAJob: false,
        lookingForAJobDescription: null,
        fullName: null,
        userId: -1,
        photos: {
            small: null,
            large: null
        }
    }
}


const profileReducer = (state: ProfileStateType = initialState, action: any): ProfileStateType => {
    switch (action.type) {
        case UPDATE_POST_TEXT: return { ...state, currentPost: action.newText }
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
        case SET_USER_PROFILE: return { ...state, profile: action.profile }

        default: return state;
    }
}

export const addPost = (): { type: typeof ADD_POST } => ({ type: ADD_POST });

export const updateNewPostText = (text: string): { type: typeof UPDATE_POST_TEXT, newText: string } => ({ type: UPDATE_POST_TEXT, newText: text });

export const setUserProfile = (profile: ProfileType): { type: typeof SET_USER_PROFILE, profile: ProfileType } => ({ type: SET_USER_PROFILE, profile});

export default profileReducer;