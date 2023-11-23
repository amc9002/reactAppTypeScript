import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { getAuthUserData } from '../../Redux/auth-reducer';
import { RootStateType } from '../../Redux/redux-store';
import Header from './Header';

class HeaderContainer extends React.Component<PropsFromRedux> {
    componentDidMount() {
        this.props.getAuthUserData();            
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

const connector = connect(mapStateToProps, { getAuthUserData });
export type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(HeaderContainer);