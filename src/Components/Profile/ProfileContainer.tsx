import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { getProfile } from "../../Redux/profile-reducer";
import withRouter, { RouterDataType } from "../../withRouter";
import { RootStateType } from '../../Redux/redux-store';
import Profile from "./Profile";
import { redirect } from "react-router-dom";

class ProfileContainer extends React.Component<PropsFromRedux> {
    componentDidMount() {
        const rt = this.props[`router` as keyof PropsFromRedux] as unknown as RouterDataType;
        this.props.getProfile(rt);
    }

    render(): any {
        if (!this.props.isAuth) return redirect("/login");

        return (
            <div>
                <Profile />
            </div>
        )
    }
}

let AuthRedirectComponent = () => {

}

let mapStateToProps = (state: RootStateType): {isAuth: boolean} => {
    return {
        isAuth: state.auth.isAuth
    }
}

const connector = connect(mapStateToProps, { getProfile });

export type PropsFromRedux = ConnectedProps<typeof connector>;

export default withRouter(connector(ProfileContainer));