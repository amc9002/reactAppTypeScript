import { ProfileStateType } from "../../types";
import MyPostsContainer from "./MyPosts/MyPostsContainer"
import ProfileInfo from "./ProfileInfo/ProfileInfo"

const Profile = (props: ProfileStateType): JSX.Element => {
    return (
        <div>
            <ProfileInfo profile={ props.profile } />
            <MyPostsContainer />
        </div>
    )
}

export default Profile;