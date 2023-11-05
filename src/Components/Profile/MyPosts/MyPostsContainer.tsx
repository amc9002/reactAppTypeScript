import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { updateNewPostText, addPost } from '../../../Redux/profile-reducer'
import { RootStateType } from '../../../Redux/redux-store';
import { ProfileStateType } from '../../../types';
import MyPosts from './MyPosts';

class MyPostsContainer extends React.Component<PropsFromRedux>{
    render() {
        return (
            <div>
                <MyPosts {...this.props} />
            </div>
        )
    }
}

const connector = connect((state: RootStateType): { profilePage: ProfileStateType } => { return { profilePage: state.profilePage } },
    { updateNewPostText, addPost });
export type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(MyPostsContainer);