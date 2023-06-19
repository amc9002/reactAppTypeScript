import { addPostActionCreator, updatePostTextActionCreator } from '../../../Redux/profile-reducer'
import StoreContext from '../../../storeContext';
import MyPosts from './MyPosts';

const MyPostsContainer = (): JSX.Element => {
    return (
        <StoreContext.Consumer>
            { (store: any): any => {
                let state: any = store.getState();
                let onAddNewPost = (): void => {
                    store.dispatch(addPostActionCreator());
                }

                let onPostChange = (text: string): void => {
                    store.dispatch(updatePostTextActionCreator(text));
                }
                return <MyPosts
                    ava={state.profilePage.pictureLinks.avaLink}
                    posts={state.profilePage.posts}
                    currentPost={state.profilePage.currentPost}
                    updateNewPostText={onPostChange}
                    addPost={onAddNewPost} />
            }
        }
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer;