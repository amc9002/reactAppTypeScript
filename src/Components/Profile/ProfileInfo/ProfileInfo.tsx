import { PropsFromRedux } from '../ProfileContainer';
import styles from './ProfileInfo.module.css';

const ProfileInfo = (props: PropsFromRedux): JSX.Element => {
    return (
        <div >
            <div>
                <img src={props.pictureLinks.profilePicLink} alt="" />
            </div>
            <div className={styles.descrBlock} >
                ava+descr
            </div>
        </div>
    );
}

export default ProfileInfo;