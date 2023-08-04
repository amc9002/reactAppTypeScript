import { connect, ConnectedProps } from 'react-redux';
import { addPostActionCreator, updatePostTextActionCreator } from '../../../Redux/profile-reducer'
import { RootStateType } from '../../../Redux/redux-store';
import { ProfileStateType } from '../../../types';
import MyPosts from './MyPosts';

type MapStateToPropsType = {
    profilePage: ProfileStateType
}

type MapDispatchPropsType = {
    updateNewPostText: Function
    addPost: Function
}

const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        profilePage: state.profilePage
    }
}

const mapDispatchToProps = (dispatch: Function): MapDispatchPropsType => {
    return {
        updateNewPostText: (text: string) => { dispatch(updatePostTextActionCreator(text)) },
        addPost: () => { dispatch(addPostActionCreator()) }
    }
}

const connector = connect(mapStateToProps, mapDispatchToProps);
export type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(MyPosts);