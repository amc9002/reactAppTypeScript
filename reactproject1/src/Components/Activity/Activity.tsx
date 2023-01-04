import React from 'react';
import Profile from './Profile/Profile';
import s from './Activity.module.css';

const Activity = () => {
    return (
        <div className='content'>
            <Profile />
            <div>
                my posts
                <div className={s.item}>
                    New post
                </div>
                <div className={s.item}>
                    Post 1
                </div>
                <div className={s.item}>
                    Post 2
                </div>
            </div>
        </div>

    );
}

export default Activity;
