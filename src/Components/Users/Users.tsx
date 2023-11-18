import styles from "./Users.module.css";
import userPic from "../../Assets/Images/585e4bcdcb11b227491c3396.png";
import { ReactElement } from "react";
import { UserType } from "../../types";
import { NavLink } from "react-router-dom";

interface IProps {
    totalCount: number
    pageSize: number
    currentPage: number
    users: Array<UserType>
    follow: Function
    unfollow: Function
    onPageChanged: Function
    followingInProgress: Array<number>
}

const Users = (props: IProps): JSX.Element => {
    let pagesCount: number = Math.ceil(props.totalCount / props.pageSize);
    let pages: number[] = [];
    for (let i = 1; i <= pagesCount; i++)
        pages.push(i);

    return (
        <div>
            <div>
                {pages.map((p: number, ind: number): ReactElement =>
                    <span key={ind} className={ props.currentPage === p ? styles.selectedPage : '' }
                        onClick={(): void => { props.onPageChanged(p) }}> {p}
                    </span>
                )}
            </div>
            { props.users.map((u: UserType): ReactElement =>
                <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={"/profile/" + u.id}>
                                <img src={u.photos.small !== null ? u.photos.small : userPic} className={styles.ava} />
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button disabled={ props.followingInProgress.some(id => id == u.id) }
                                    onClick={() => { props.unfollow(u.id); }}>Unfollow</button>

                                : <button disabled={ props.followingInProgress.some(id => id == u.id) }
                                    onClick={() => { props.follow(u.id); }}> Follow </button> }
                        </div>
                    </span>
                    <span>
                        <div>
                            {u.name}cmd

                        </div>
                        <div>
                            {u.status}
                        </div>
                    </span>
                </div>
            )}
        </div>
    );

}

export default Users;