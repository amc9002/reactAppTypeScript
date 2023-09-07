import styles from './Post.module.css';

interface IProps {
    ava: string
    message: string
    count: number
}

const Post = (props: IProps): JSX.Element => {
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