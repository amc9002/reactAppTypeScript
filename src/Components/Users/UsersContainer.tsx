import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { RootStateType } from "../../Redux/redux-store";
import { FollowAC, SetCurrentPageAC, SetTotalUsersCountAC, SetUsersAC, ToggleIsFetchingAC, UnFollowAC } from "../../Redux/users-reducer";
import { UsersStateType, UserType } from "../../types";
import Users from "./Users";
import axios from "axios";
import Preloader from "../Preloader/Preloader";


class UsersAPIContainer extends React.Component<PropsFromRedux> {
    componentDidMount(): void {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount)
            });
    }

    onPageChanged = (pageNumber: number): void => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
            });
    }

    render(): JSX.Element {
        return <>
            {this.props.isFetching ? <Preloader size={100} /> : null}
            <Users
                totalCount={this.props.totalCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                followUser={this.props.followUser}
                unFollowUser={this.props.unFollowUser}
            />
        </>
    }
}

const mapStateToProps = (state: RootStateType): UsersStateType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

type MapDispatchPropsType = {
    followUser: Function
    unFollowUser: Function
    setUsers: Function
    setCurrentPage: Function
    setTotalUsersCount: Function
    toggleIsFetching: Function
}

const mapDispatchToProps = (dispatch: Function): MapDispatchPropsType => {
    return {
        followUser: (userId: number) => { dispatch(FollowAC(userId)) },
        unFollowUser: (userId: number) => { dispatch(UnFollowAC(userId)) },
        setUsers: (users: Array<UserType>) => { dispatch(SetUsersAC(users)) },
        setCurrentPage: (currentPage: number) => { dispatch(SetCurrentPageAC(currentPage)) },
        setTotalUsersCount: (totalCount: number) => { dispatch(SetTotalUsersCountAC(totalCount)) },
        toggleIsFetching: (isFetching: boolean) => { dispatch(ToggleIsFetchingAC(isFetching)) }
    }
}

const connector = connect(mapStateToProps, mapDispatchToProps);
export type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(UsersAPIContainer);