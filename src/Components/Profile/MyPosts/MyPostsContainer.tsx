import { connect } from 'react-redux';
import { addPostActionCreator, updatePostTextActionCreator } from '../../../Redux/profile-reducer'
import MyPosts from './MyPosts';

const mapStateToProps: any = (state: any) => {
    return {
        profilePage: state.profilePage
    }
}

const mapDispatchToProps: any = (dispatch: Function): any => {
    return {
        updateNewPostText: (text: string) => { dispatch(updatePostTextActionCreator(text)) },
        addPost: () => { dispatch(addPostActionCreator()) }
    }
}

const MyPostsContainer: any = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;