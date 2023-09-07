import axios from "axios";
import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { setUserProfile } from "../../Redux/profile-reducer";
import { RootStateType } from "../../Redux/redux-store";
import { ProfileStateType } from "../../types";
import Profile from "./Profile";

class ProfileContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data);
            });
    }

    render() {
        return (
            <div>
                <Profile {...this.props} />
            </div>
        )
    }
}

const mapStateToProps = (state: RootStateType): ProfileStateType => {
    return {
        currentPost: state.profilePage.currentPost,
        posts: state.profilePage.posts,
        pictureLinks: state.profilePage.pictureLinks,
        profile: state.profilePage.profile,
    }
};


const connector = connect(mapStateToProps, { setUserProfile });
export type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(ProfileContainer);