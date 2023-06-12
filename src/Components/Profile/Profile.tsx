import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from './MyPosts/MyPosts';

const Profile = (props: any): JSX.Element => {
    return (
        <div>
            <ProfileInfo profilePic={props.profilePage.pictureLinks.profilePicLink} />
            <MyPosts
                profilePage={props.profilePage}
                currentPost={props.profilePage.currentPost}
                dispatch={props.dispatch} />
        </div >
    );
}

export default Profile;