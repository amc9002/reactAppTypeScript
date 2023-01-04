import React from 'react';
import s from './Profile.module.css'

const Profile = () => {
    return (
        <div>
            <div className={s.wallpapers}>
                <img src="https://www.gettyimages.pt/gi-resources/images/Homepage/Hero/PT/PT_hero_42_153645159.jpg" alt=""></img>
            </div>
            <div>
                ava + descr
            </div>
        </div>

    );
}

export default Profile;
