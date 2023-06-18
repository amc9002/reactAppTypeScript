import { addPostActionCreator, updatePostTextActionCreator } from '../../../Redux/profile-reducer'
import MyPosts from './MyPosts';

const MyPostsContainer = (props: any): JSX.Element => {

    let onAddNewPost = (): void => {
        props.store.dispatch(addPostActionCreator());
    }

    let onPostChange = (text: string): void => {
        props.store.dispatch(updatePostTextActionCreator(text));
    }

    return <MyPosts
        ava={props.store.getState().profilePage.pictureLinks.avaLink}
        posts={props.store.getState().profilePage.posts}
        currentPost={props.store.getState().profilePage.currentPost }
        updateNewPostText={onPostChange}
        addPost={onAddNewPost} />;
}

export default MyPostsContainer;