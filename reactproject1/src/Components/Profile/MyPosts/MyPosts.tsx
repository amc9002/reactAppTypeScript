import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';
import { addPostActionCreator, updatePostTextActionCreator } from '../../../Redux/profile-reducer'



const MyPosts = (props: any): JSX.Element => {
    let ava = props.profilePage.pictureLinks.avaLink;
    let postsToJsx: Array<JSX.Element> = props.profilePage.posts.map(
        (p: { id: number, msg: string, likes: number, ava: string | null }) =>
            <Post key={p.id} message={p.msg} count={p.likes} ava={ava} />);

    let addNewPost = (): void => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
        props.dispatch(updatePostTextActionCreator(e.target.value));
    }

    return (
        <div className={styles.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} value={props.profilePage.currentPost} />
                </div>
                <div>
                    <button onClick={addNewPost}>Add post</button>
                </div>
            </div>
            <div className={ styles.posts }>
                {postsToJsx}
            </div>
        </div>
    );
}

export default MyPosts;