import axios from "axios";
import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { setUserProfile } from "../../Redux/profile-reducer";
import withRouter, { RouterDataType } from "../../withRouter";
import Profile from "./Profile";

class ProfileContainer extends React.Component<PropsFromRedux> {
    componentDidMount() {
        const rt = this.props[`router` as keyof PropsFromRedux] as unknown as RouterDataType;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${rt.params["profile_id"]}`)
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

const connector = connect(() => { }, { setUserProfile });

export type PropsFromRedux = ConnectedProps<typeof connector>;

export default withRouter(connector(ProfileContainer));