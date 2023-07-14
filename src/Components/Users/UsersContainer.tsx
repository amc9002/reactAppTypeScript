import { connect } from "react-redux";
import { FollowAC, SetUsersAC, UnFollowAC } from "../../Redux/users-reducer";
import Users from "./Users";

export type UserType = {
    id: number,
    name: string,
    status: string
    photos: { small: string, large: string }
    followed: boolean
}

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

export default connect(mapStateToProps, mapDispatchToProps)(Users);