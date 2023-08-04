import { MenuButtonType } from "../types";

let initialState: Array<MenuButtonType> = [
    { id: 0, link: "Profile", navLink: "/profile" },
    { id: 1, link: "Messages", navLink: "/dialogs" },
    { id: 2, link: "News", navLink: "/news" },
    { id: 3, link: "Music", navLink: "/music" },
    { id: 4, link: "Friends", navLink: "/friends" },
    { id: 5, link: "Settings", navLink: "/settings" },
    { id: 6, link: "Users", navLink: "/users" }
]

const sidebarReducer = (state: Array<MenuButtonType> = initialState, action: any): Array<MenuButtonType> => state;

export default sidebarReducer;