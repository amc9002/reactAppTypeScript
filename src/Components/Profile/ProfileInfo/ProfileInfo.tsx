import styles from './ProfileInfo.module.css';
import yesPic from '../../../Assets/Images/yesPic.jpeg';
import noPic from '../../../Assets/Images/noPic.jpeg';
import { ReactElement } from 'react';
 

const ProfileInfo = (props: any): JSX.Element => {
    let lookingForAjobPic: string = "";
    props.profile.lookingForAJob ? lookingForAjobPic = yesPic : lookingForAjobPic = noPic;

    const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

    const contacts: Array<JSX.Element> = Object.entries(props.profile.contacts).map(([k, v]): ReactElement =>
        <div key={k}>
            <span className={styles.infoPunct}>{capitalize(k)}:</span> <>{v}</>
        </div>
    );

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
                {contacts}
            </div>
            <div className={styles.descrBlock} >
                ava+descr
            </div>
        </div>
    );
}

export default ProfileInfo;