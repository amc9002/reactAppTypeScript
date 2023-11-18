import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { getProfile } from "../../Redux/profile-reducer";
import withRouter, { RouterDataType } from "../../withRouter";
import Profile from "./Profile";

class ProfileContainer extends React.Component<PropsFromRedux> {
    componentDidMount() {
        const rt = this.props[`router` as keyof PropsFromRedux] as unknown as RouterDataType;
        this.props.getProfile(rt);
    }

    render() {
        return (
            <div>
                <Profile />
            </div>
        )
    }
}

const connector = connect(() => { }, { getProfile });

export type PropsFromRedux = ConnectedProps<typeof connector>;

export default withRouter(connector(ProfileContainer));