import { combineReducers, createStore } from 'redux';
import headerPicReducer from './header-pic-reducer';
import profileReducer from './profile-reducer';
import messageReducer from './message-reducer';
import sidebarReducer from './sidebar-reducer';

let reducers = combineReducers({
    header: headerPicReducer,
    profilePage: profileReducer,
    dialogsPage: messageReducer,
    sidebar: sidebarReducer
});

let store = createStore(reducers);

export type RootState = ReturnType<typeof store.getState>

export default store;