import { connect, ConnectedProps, MapDispatchToProps, MapStateToProps } from "react-redux";
import { FollowAC, SetUsersAC, UnFollowAC } from "../../Redux/users-reducer";
import { UserType } from "../../types";
import Users from "./Users";

type mapStateToPropsType = {
    users: Array<UserType>
    }

type MapDispatchPropsType = {
    followUser: Function
    unFollowUser: Function
    setUsers: Function
    }

const mapStateToProps = (state: any): mapStateToPropsType => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch: Function): MapDispatchPropsType => {
    return {
        followUser: (userId: number) => { dispatch(FollowAC(userId)) },
        unFollowUser: (userId: number) => { dispatch(UnFollowAC(userId)) },
        setUsers: (users: Array<UserType>) => { dispatch(SetUsersAC(users)) }
    }
}

const connector = connect(mapStateToProps, mapDispatchToProps);
export type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Users);