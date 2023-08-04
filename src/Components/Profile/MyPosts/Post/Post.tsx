import styles from './Post.module.css';

interface PropsInterface {
    ava: string
    message: string
    count: number
}

const Post = (props: PropsInterface): JSX.Element => {
    return (
        <div className={styles.item}>
            <img src={props.ava} alt="" />
            {props.message}
            <div className={styles.likes}>
                <span>Like</span>  Likes: { props.count }
            </div>
        </div>
    );
}

export default Post;