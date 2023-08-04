import styles from "./Users.module.css";
import axios from "axios";
import userPic from "../../Assets/Images/585e4bcdcb11b227491c3396.png";
import React from "react";
import { type PropsFromRedux } from './UsersContainer';
import { UserType } from "../.././types";

class Users extends React.Component<PropsFromRedux> {
    constructor(props: PropsFromRedux) {
        super(props);
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            props.setUsers(response.data.items);
        });
    }

    render() {
        return (
            <div>
                {this.props.users.map((u: UserType) =>
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