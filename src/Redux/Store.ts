import profileReducer from "./profile-reducer.js";
import messageReducer from "./message-reducer.js";
import sidebarReducer from "./sidebar-reducer.js";

type SidebarType = {
    id: number
    link: string
    navLink: string
}

type PostType = {
    id: number
    msg: string
    likes: number
}

type PictureLinksType = {
    profilePicLink: string | null
    avaLink: string | null
}

type ProfilePageType = {
    currentPost: string
    posts: Array<PostType>
    pictureLinks: PictureLinksType
}

type DialogType = {
    id: number
    name: string
    ava: string | null
}

type MessageType = {
    id: number
    msg: string
    }

type DialogsPageType = {
    dialogs: Array<DialogType>
    currentMessage: string
    messages: Array<MessageType>
    }

type StateType = {
    header: string
    sidebar: Array<SidebarType>
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

type StoreType = {
    _state: StateType
    _callSubscriber: Function
    getState: Function
    subscribe: Function
    dispatch: Function
}

let store: StoreType = {
    _state: {
        header: 'https://img.freepik.com/free-vector/golden-bird-logo-design_1195-336.jpg?w=2000',

        sidebar: [
            { id: 0, link: "Profile", navLink: "/profile" },
            { id: 1, link: "Messages", navLink: "/dialogs" },
            { id: 2, link: "News", navLink: "/news" },
            { id: 3, link: "Music", navLink: "/music" },
            { id: 4, link: "Friends", navLink: "/friends" },
            { id: 5, link: "Settings", navLink: "/settings" },
        ],

        profilePage: {
            currentPost: "New post here",
            posts: [
                { id: 0, msg: "Hello World!", likes: 20, },
                { id: 1, msg: "Nice weather today", likes: 40, },
                { id: 2, msg: "Go to drink!", likes: 10, },
                { id: 3, msg: "Arr!", likes: 100, },
            ],

            pictureLinks: {
                profilePicLink: "https://www.uu.se/digitalAssets/805/c_805646-l_1-k_image.jpg",
                avaLink: "https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg",
            }
        },

        dialogsPage: {
            dialogs: [
                { id: 0, name: "Mike", ava: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/ea7a3c32163929.567197ac70bda.png" },
                { id: 1, name: "Andris", ava: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHCZuslFbn42wwA9qw6ywBERhtpr_yOFy3Cw&usqp=CAU" },
                { id: 2, name: "Kandrat", ava: "https://i.kinja-img.com/gawker-media/image/upload/t_original/ijsi5fzb1nbkbhxa2gc1.png" },
                { id: 3, name: "Anela", ava: "https://alitech.com.ng/wp-content/uploads/2020/06/IMG_20200603_114713-e1592183490881.jpg" },
                { id: 4, name: "Jakub", ava: "https://im.indiatimes.in/content/2022/Feb/AMP-44_61fb8b8840826.jpg?w=820&h=540&cc=1" },
            ],

            currentMessage: "New message here",
            messages: [
                { id: 0, msg: "Hello hru", },
                { id: 1, msg: "Good, thx. And u", },
                { id: 2, msg: "Nothing much", },
            ]
        }
    },

    _callSubscriber(state: any): void {

    },

    getState(): StateType {
        return this._state;
    },

    subscribe(observer: any): void {
        this._callSubscriber = observer;
    },

    dispatch(action: any): void {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = messageReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}

export default store;