import React from 'react';
import styles from './Navbar.module.css';
import { NavLink } from "react-router-dom";

const Navbar = (props: any): JSX.Element => {
    const getClassName = (isActive: any, isPending: any) => isPending ? styles.pending : isActive ? styles.active : "";
    let menuToJsx: Array<JSX.Element> = props.menu.map((p: { navLink: string, id: number, link: string }) =>
        <div className={styles.item}>
            <NavLink to={p.navLink} key={p.id} className={getClassName}>
                {p.link}
            </NavLink>
        </div>);

    return (
        <div className={styles.nav} >
            <nav>
                {menuToJsx}
            </nav>
        </div>

    );
}

export default Navbar;
