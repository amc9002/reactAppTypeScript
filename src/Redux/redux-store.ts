import { combineReducers, createStore } from 'redux';
import headerPicReducer from './header-pic-reducer';
import profileReducer from './profile-reducer';
import messageReducer from './message-reducer';
import sidebarReducer from './sidebar-reducer';
import usersReducer from './users-reducer';

const reducers = combineReducers({
    header: headerPicReducer,
    profilePage: profileReducer,
    dialogsPage: messageReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer
});

const store = createStore(reducers);

export type RootStateType = ReturnType<typeof store.getState>

export default store;