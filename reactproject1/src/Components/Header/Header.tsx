import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/ZDF_logo%21_Logo_2021.svg/640px-ZDF_logo%21_Logo_2021.svg.png" alt=''></img>
        </header>
    );
}

export default Header;
