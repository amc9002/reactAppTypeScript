import { UserType } from "./UsersContainer";
import styles from "./Users.module.css";
import axios from "axios";
import userPic from "../../Assets/Images/585e4bcdcb11b227491c3396.png";

const Users = (props: any): JSX.Element => {
    if (props.users.length === 0)
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            props.setUsers(response.data.items);
        });
    
    return (
        <div>
            {
                props.users.map((u: UserType) =>
                    <div key={u.id}>
                        <span>
                            <div>
                                <img src={u.photos.small !== null ? u.photos.small : userPic} className={styles.ava} />
                            </div>
                            <div>
                                {u.followed
                                    ? <button onClick={() => { props.unFollowUser(u.id) }}>Unfollow</button>
                                    : <button onClick={() => { props.followUser(u.id) }}> Follow </button>}
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

export default Users;