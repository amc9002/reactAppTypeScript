import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
/*import MyPosts from './MyPosts/MyPosts';*/
import MyPostsContainer from './MyPosts/MyPostsContainer';
import StoreContext from '../../storeContext';

const Profile = (): JSX.Element => {
    return (
        <div>
            <StoreContext.Consumer>
                { (store: any): any => (
                    <ProfileInfo profilePic={store.getState().profilePage.pictureLinks.profilePicLink} />)
                }
            </StoreContext.Consumer>
            <MyPostsContainer />
        </div >
    );
}

export default Profile;