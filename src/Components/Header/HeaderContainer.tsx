import axios from 'axios';
import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { setAuthUserData } from '../../Redux/auth-reducer';
import { RootStateType } from '../../Redux/redux-store';
import Header from './Header';

class HeaderContainer extends React.Component<PropsFromRedux> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, { withCredentials: true })
            .then(response => {
                if (response.data.ResultCode === 0) {
                    let { id, email, login } = response.data.data;
                    this.props.setAuthUserData(id, email, login);
                }
            });
    }

    render() {
        return < Header{...this.props} />
    }
}

const mapStateToProps = (state: RootStateType): { header: string, isAuth: boolean, login: string | null } => {
    return {
        header: state.header,
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

const connector = connect(mapStateToProps, {setAuthUserData});
export type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(HeaderContainer);