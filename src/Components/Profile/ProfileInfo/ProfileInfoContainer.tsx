import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { RootStateType } from "../../../Redux/redux-store";
import { ProfileType } from "../../../types";
import ProfileInfo from "./ProfileInfo";

class ProfileInfoContainer extends React.Component<PropsFromRedux>{
    render() {
        return (
            <div>
                <ProfileInfo { ...this.props } />
            </div>
        )
    }
}

const mapStateToProps = (state: RootStateType): ProfileType => ({
    aboutMe: state.profilePage.profile?.aboutMe ?? "",
    contacts: {
        facebook: state.profilePage.profile?.contacts.facebook ?? "",
        website: state.profilePage.profile?.contacts.website ?? "",
        vk: state.profilePage.profile?.contacts.vk ?? "",
        twitter: state.profilePage.profile?.contacts.twitter ?? "",
        instagram: state.profilePage.profile?.contacts.instagram ?? "",
        youtube: state.profilePage.profile?.contacts.youtube ?? "",
        github: state.profilePage.profile?.contacts.github ?? "",
        mainLink: state.profilePage.profile?.contacts.mainLink ?? "",
    },
    lookingForAJob: state.profilePage.profile?.lookingForAJob ?? false,
    lookingForAJobDescription: state.profilePage.profile?.lookingForAJobDescription ?? "",
    fullName: state.profilePage.profile?.fullName ?? "",
    userId: state.profilePage.profile?.userId ?? -1,
    photos: {
        small: state.profilePage.profile?.photos.small ?? "",
        large: state.profilePage.profile?.photos.large ?? "",
    }
})

const connector = connect(mapStateToProps,);
export type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(ProfileInfoContainer);