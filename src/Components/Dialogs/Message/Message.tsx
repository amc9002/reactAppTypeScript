import React from 'react';
import styles from './../Dialogs.module.css';


const Message = (props: any) => {
    return <div className={styles.message}>{props.msg}</div>
}

export default Message;