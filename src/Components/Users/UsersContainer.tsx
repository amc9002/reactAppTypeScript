import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { RootStateType } from "../../Redux/redux-store";
import { follow, unfollow, setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching } from "../../Redux/users-reducer";
import { UsersStateType } from "../../types";
import Users from "./Users";
import Preloader from "../Preloader/Preloader";
import { usersAPI } from "../../API/api";


class UsersAPIContainer extends React.Component<PropsFromRedux> {
    componentDidMount(): void {
        this.props.toggleIsFetching(true);

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount)
            });
    }

    onPageChanged = (pageNumber: number): void => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);

        usersAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
            });
    }

    render(): JSX.Element {
        return <>
            {this.props.isFetching ? <Preloader size={100} /> : null}
            <Users
                totalCount={this.props.totalCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                users={this.props.users}
                followUser={this.props.follow}
                unFollowUser={this.props.unfollow}
                onPageChanged={this.onPageChanged}
            />
        </>
    }
}

const mapStateToProps = (state: RootStateType): UsersStateType => ({
    totalCount: state.usersPage.totalCount,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
    users: state.usersPage.users,
    isFetching: state.usersPage.isFetching
})

const connector = connect(mapStateToProps, { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching });
export type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(UsersAPIContainer);