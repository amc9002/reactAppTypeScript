import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { RootStateType } from "../../Redux/redux-store";
import { follow, unfollow, getUsers } from "../../Redux/users-reducer";
import { UsersStateType } from "../../types";
import Users from "./Users";
import Preloader from "../Preloader/Preloader";


class UsersAPIContainer extends React.Component<PropsFromRedux> {
    componentDidMount(): void {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber: number): void => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render(): JSX.Element {
        return <>
            {this.props.isFetching ? <Preloader size={100} /> : null}
            <Users
                totalCount={this.props.totalCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                onPageChanged={this.onPageChanged}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

const mapStateToProps = (state: RootStateType): UsersStateType => ({
    totalCount: state.usersPage.totalCount,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
    users: state.usersPage.users,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress
})

const connector = connect(mapStateToProps, { follow, unfollow, getUsers });
export type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(UsersAPIContainer);