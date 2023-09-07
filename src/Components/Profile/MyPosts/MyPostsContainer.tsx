import { connect, ConnectedProps } from 'react-redux';
import { updateNewPostText, addPost } from '../../../Redux/profile-reducer'
import { RootStateType } from '../../../Redux/redux-store';
import { ProfileStateType } from '../../../types';
import MyPosts from './MyPosts';

const mapStateToProps = (state: RootStateType): { profilePage: ProfileStateType } => {
    return {
        profilePage: state.profilePage
    }
}

const connector = connect(mapStateToProps, { updateNewPostText, addPost });
export type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(MyPosts);