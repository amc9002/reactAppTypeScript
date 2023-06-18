import React from 'react';
import styles from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';

type DialogType = {
    id: number
    name: string
    ava: string | null
}

type MessageType = {
    id: number
    msg: string
}

type DialogsPropsType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    currentMessage: string
    addNewMessage: Function
    changeMessage: Function
}

const Dialogs = (props: DialogsPropsType): JSX.Element => {
    const getClassName: any = (props: { isActive: any, isPending: any }) =>
        props.isPending ? styles.pending : props.isActive ? styles.active : "";

    let dialogsToJsx: Array<JSX.Element> = props.dialogs.map(
        (d: DialogType) =>
        <Dialog key={d.id} id={d.id} name={d.name} ava={d.ava} class_={getClassName} />);

    let messagesToJsx: Array<JSX.Element> = props.messages.map(
        (m: {id: number, msg: string}) => <Message key={m.id} msg={m.msg} />)

    const onNewMessage = (): void => {
        props.addNewMessage();
    }

    const onMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
        let text: string = e.target.value;
        props.changeMessage(text);
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