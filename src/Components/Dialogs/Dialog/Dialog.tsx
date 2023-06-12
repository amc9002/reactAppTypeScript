import React from 'react';
import styles from './../Dialogs.module.css';
import { NavLink } from "react-router-dom";

const Dialog = (props: any) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={styles.dialog}>
            <NavLink to={path} className={props.class_}>
                <img src={props.ava} alt="" />
                <span>{props.name}</span>
            </NavLink>
        </div>
    );
}

export default Dialog;