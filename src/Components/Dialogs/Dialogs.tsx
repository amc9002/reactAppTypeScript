import React from 'react';
import styles from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import { DialogType } from '../../types';
import { PropsFromRedux } from './DialogsContainer';
import { redirect } from 'react-router-dom';

const Dialogs = (props: PropsFromRedux): any => {
    const getClassName: Function = (props: { isActive: boolean, isPending: boolean }) =>
        props.isPending ? styles.pending : props.isActive ? styles.active : "";

    let dialogsToJsx: Array<JSX.Element> = props.dialogs.map(
        (d: DialogType) =>
            <Dialog key={d.id} id={d.id} name={d.name} ava={d.ava} class_={getClassName} />);

    let messagesToJsx: Array<JSX.Element> = props.messages.map(
        (m: { id: number, msg: string }) => <Message key={m.id} msg={m.msg} />)

    const onNewMessage = (): void => {
        props.addMessage();
    }

    const onMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
        let text: string = e.target.value;
        props.updateMessage(text);
    }

    if (!props.isAuth) return redirect("/login");

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
                    <textarea onChange={onMessageChange} value={props.currentMessage} />
                </div>
                <div>
                    <button onClick={onNewMessage}>Message</button>
                </div>

            </div>

        </div>
    );
}

export default Dialogs;