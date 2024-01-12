import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { getProfile } from "../../Redux/profile-reducer";
import withRouter, { RouterDataType } from "../../withRouter";
import { RootStateType } from '../../Redux/redux-store';
import Profile from "./Profile";
import WithAuthRedirect from "../../HOC/withAuthRedirect";


class ProfileContainer extends React.Component<PropsFromRedux> {
    componentDidMount() {
        const rt = this.props[`router` as keyof PropsFromRedux] as unknown as RouterDataType;
        this.props.getProfile(rt);
    }

    render(): JSX.Element {
        return (
            <div>
                <Profile />
            </div>
        )
    }
}

let mapStateToProps = (state: RootStateType): { isAuth: boolean } => {
    return {
        isAuth: state.auth.isAuth
    }
}

const connector = connect(mapStateToProps, { getProfile });

export type PropsFromRedux = ConnectedProps<typeof connector>;

export default withRouter(connector(WithAuthRedirect(ProfileContainer)));