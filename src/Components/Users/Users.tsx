import styles from "./Users.module.css";
import axios from "axios";
import userPic from "../../Assets/Images/585e4bcdcb11b227491c3396.png";
import React, { ReactElement } from "react";
import { type PropsFromRedux } from './UsersContainer';
import { UserType } from "../../types";

class Users extends React.Component<PropsFromRedux> {

    componentDidMount(): void {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount)
            });
    }

    onPageChanged = (pageNumber: number): void => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }

    render(): JSX.Element {
        let pagesCount: number = Math.ceil(this.props.totalCount / this.props.pageSize);
        let pages: number[] = [];
        for (let i = 1; i <= pagesCount; i++)
            pages.push(i);

        return (
            <div>
                <div>
                    {pages.map((p: number, ind: number): ReactElement =>
                        <span key={ind} className={this.props.currentPage === p ? styles.selectedPage : ''}
                            onClick={(): void => { this.onPageChanged(p) }}> {p}
                        </span>
                    )}
                </div>
                {this.props.users.map((u: UserType): ReactElement =>
                    <div key={u.id}>
                        <span>
                            <div>
                                <img src={u.photos.small !== null ? u.photos.small : userPic} className={styles.ava} />
                            </div>
                            <div>
                                {u.followed
                                    ? <button onClick={() => { this.props.unFollowUser(u.id) }}>Unfollow</button>
                                    : <button onClick={() => { this.props.followUser(u.id) }}> Follow </button>}
                            </div>
                        </span>
                        <span>
                            <div>
                                {u.name}
                            </div>
                            <div>
                                {u.status}
                            </div>
                        </span>
                    </div>
                )
                }
            </div>
        );
    }
}

export default Users;