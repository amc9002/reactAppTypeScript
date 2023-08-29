import { connect, ConnectedProps } from "react-redux";
import { RootStateType } from "../../Redux/redux-store";
import { FollowAC, SetCurrentPageAC, SetTotalUsersCountAC, SetUsersAC, UnFollowAC } from "../../Redux/users-reducer";
import { UsersStateType, UserType } from "../../types";
import Users from "./Users";

type MapDispatchPropsType = {
    followUser: Function
    unFollowUser: Function
    setUsers: Function
    setCurrentPage: Function
    setTotalUsersCount: Function
    }

const mapStateToProps = (state: RootStateType): UsersStateType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
    }
}

const mapDispatchToProps = (dispatch: Function): MapDispatchPropsType => {
    return {
        followUser: (userId: number) => { dispatch(FollowAC(userId)) },
        unFollowUser: (userId: number) => { dispatch(UnFollowAC(userId)) },
        setUsers: (users: Array<UserType>) => { dispatch(SetUsersAC(users)) },
        setCurrentPage: (currentPage: number) => { dispatch(SetCurrentPageAC(currentPage)) },
        setTotalUsersCount: (totalCount: number) => { dispatch(SetTotalUsersCountAC(totalCount)) }
    }
}

const connector = connect(mapStateToProps, mapDispatchToProps);
export type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Users);