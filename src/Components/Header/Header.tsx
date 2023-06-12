import React from 'react';
import styles from './Header.module.css';

const Header = (props: any) => {
    return (
        <header className={styles.header}>
            <img src={props.picLink} alt=''></img>
        </header>
    );
}

export default Header;
