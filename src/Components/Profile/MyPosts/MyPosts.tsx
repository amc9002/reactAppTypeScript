import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';

type PostType = {
    id: number
    msg: string
    likes: number
}

type MyPostsType = {
    posts: Array<PostType>
    ava: string
    currentPost: string
    updateNewPostText: Function
    addPost: Function
}

const MyPosts = (props: any): JSX.Element => {
    let ava: string = props.profilePage.pictureLinks.avaLink;
    let postsToJsx: Array<JSX.Element> = props.profilePage.posts.map(
        (p: PostType) => <Post key={p.id} message={p.msg} count={p.likes} ava={ava} />);

    const onAddPost = (): void => {
        props.addPost();
    }

    const onPostChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
        let text: string = e.target.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={styles.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} value={props.profilePage.currentPost} />
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={ styles.posts }>
                {postsToJsx}
            </div>
        </div>
    );
}

export default MyPosts;