import { combineReducers, createStore } from 'redux';
import headerPicReducer from './header-pic-reducer';
import profileReducer from './profile-reducer';
import messageReducer from './message-reducer';
import sidebarReducer from './sidebar-reducer';
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';

const reducers = combineReducers({
    header: headerPicReducer,
    profilePage: profileReducer,
    dialogsPage: messageReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
});

const store = createStore(reducers);

export type RootStateType = ReturnType<typeof store.getState>

(window as any).store = store;

export default store;