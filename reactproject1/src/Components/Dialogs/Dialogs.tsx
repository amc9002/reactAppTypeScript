import React from 'react';
import styles from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import { addMessageActionCreator, updateMessageTextActionCreator } from '../../Redux/message-reducer';

const Dialogs = (props: any): JSX.Element => {
    const getClassName = (props: { isActive: any, isPending: any }) =>
        props.isPending ? styles.pending : props.isActive ? styles.active : "";

    let dialogsToJsx: Array<JSX.Element> = props.dialogsData.dialogs.map(
        (d: { id: number, name: string, ava: string }) =>
        <Dialog key={d.id} id={d.id} name={d.name} ava={d.ava} class_={getClassName} />);

    let messagesToJsx: Array<JSX.Element> = props.dialogsData.messages.map(
        (m: {id: number, msg: string}) => <Message key={m.id} msg={m.msg} />)

    const newMessage = (): void => {
        props.dispatch(addMessageActionCreator());
    }

    const onMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
        props.dispatch(updateMessageTextActionCreator(e.target.value));
    }

    return (
        <div className={styles.dialogsPage}>
            <div className={styles.dialogs}>
                {dialogsToJsx}
            </div>
            <div>
                <div className={styles.messages}>
                    {messagesToJsx}
                </div>
                <div>
                    <textarea onChange={onMessageChange} value={props.dialogsData.currentMessage} />
                </div>              
                <div>
                    <button onClick={newMessage}>Message</button>
                </div>
                
            </div>

        </div>
    );
}

export default Dialogs;