import Dialogs from './Dialogs';
import { addMessageActionCreator, updateMessageTextActionCreator } from '../../Redux/message-reducer';

type DialogType = {
    id: number
    name: string
    ava: string | null
}

type MessageType = {
    id: number
    msg: string
}

const DialogsContainer = (props: any): JSX.Element => {

    let dialogs: Array<DialogType> = props.store.getState().dialogsPage.dialogs;
    let messages: Array<MessageType> = props.store.getState().dialogsPage.messages;

    const addNewMessage = (): void => {
        props.store.dispatch(addMessageActionCreator());
    }

    const changeMessage = (text: string): void => {
        props.store.dispatch(updateMessageTextActionCreator(text));
    }

    return (
        <Dialogs dialogs={dialogs}
            messages={messages}
            currentMessage={props.store.getState().dialogsPage.currentMessage}
            addNewMessage={addNewMessage}
            changeMessage={changeMessage} />
    );
}

export default DialogsContainer;