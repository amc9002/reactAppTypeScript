import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
/*import MyPosts from './MyPosts/MyPosts';*/
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props: any): JSX.Element => {
    return (
        <div>
            <ProfileInfo profilePic={props.store.getState().profilePage.pictureLinks.profilePicLink} />
            <MyPostsContainer store={props.store} />
        </div >
    );
}

export default Profile;