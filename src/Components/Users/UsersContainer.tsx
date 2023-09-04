import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { RootStateType } from "../../Redux/redux-store";
import { follow, unfollow, setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching } from "../../Redux/users-reducer";
import { UsersStateType } from "../../types";
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
                followUser={this.props.follow}
                unFollowUser={this.props.unfollow}
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

const connector = connect(mapStateToProps, { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching });
export type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(UsersAPIContainer);