import { ProfileStateType } from "../../types";
import MyPostsContainer from "./MyPosts/MyPostsContainer"
import ProfileInfoContainer from "./ProfileInfo/ProfileInfoContainer";

const Profile = (): JSX.Element => {
    return (
        <div>
            <img src="https://i.pinimg.com/564x/1c/56/74/1c5674df8896d8c173d8aaf59f5aeecb.jpg" alt="Cover picture" />
            <ProfileInfoContainer />
            <MyPostsContainer  />
        </div>
    )
}

export default Profile;