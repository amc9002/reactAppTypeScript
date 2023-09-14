import styles from './ProfileInfo.module.css';
import yesPic from '../../../Assets/Images/yesPic.jpeg';
import noPic from '../../../Assets/Images/noPic.jpeg';


let contactExists = (contactPunct: string, contact: string | null): JSX.Element | void => {
    if (contact == null) return;
    return (
        <div><span className={styles.infoPunct}>{contactPunct}:</span> {contact}</div>
    )
}

const ProfileInfo = (props: any): JSX.Element => {
    let lookingForAjobPic: string = "";
    props.profile.lookingForAJob ? lookingForAjobPic = yesPic : lookingForAjobPic = noPic;
    return (
        <div>
            <span><img src={props.profile.photos.large ?? ""} alt="" /></span>
            <div className={styles.fullName}>{props.profile.fullName}</div>
            <div className={styles.info}>
                <div>
                    <span className={styles.infoPunct}>Looking for a job?</span>
                    <span><img className={styles.looking} src={lookingForAjobPic} /></span>
                </div>
                <div>{props.profile.lookingForAJobDescription}</div>
                <div className={styles.infoPunct}>Contacts:</div>
                {contactExists("Facebook: ", props.profile.contacts.facebook)}
                {/*<div><span className={styles.infoPunct}>Facebook:</span> {props.profile.contacts.facebook}</div>*/}
            </div>
            <div className={styles.descrBlock} >
                ava+descr
            </div>
        </div>
    );
}

export default ProfileInfo;