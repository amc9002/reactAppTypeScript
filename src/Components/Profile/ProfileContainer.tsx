import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { profileAPI } from "../../API/api";
import { setUserProfile } from "../../Redux/profile-reducer";
import withRouter, { RouterDataType } from "../../withRouter";
import Profile from "./Profile";

class ProfileContainer extends React.Component<PropsFromRedux> {
    componentDidMount() {
        const rt = this.props[`router` as keyof PropsFromRedux] as unknown as RouterDataType;

        profileAPI.getProfile(rt.params["profile_id"])
            .then(data => {
                this.props.setUserProfile(data);
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