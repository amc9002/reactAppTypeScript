import axios from "axios";
import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { setUserProfile } from "../../Redux/profile-reducer";
import Profile from "./Profile";

class ProfileContainer extends React.Component<PropsFromRedux> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data);
            });
    }

    render() {
        return (
            <div>
                <Profile />
            </div>
        )
    }
}


const connector = connect(() => {}, { setUserProfile });

export type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(ProfileContainer);