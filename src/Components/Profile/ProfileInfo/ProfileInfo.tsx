import React from 'react';
import styles from './ProfileInfo.module.css';

const ProfileInfo = (props: any): JSX.Element => {
    return (
        <div >
            <div>
                <img src={props.profilePic} alt="" />
            </div>
            <div className={styles.descrBlock} >
                ava+descr
            </div>
        </div>
    );
}

export default ProfileInfo;