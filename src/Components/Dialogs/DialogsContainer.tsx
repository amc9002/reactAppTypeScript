import Dialogs from './Dialogs';
import { addMessageActionCreator, updateMessageTextActionCreator } from '../../Redux/message-reducer';
import StoreContext from '../../storeContext';

type DialogType = {
    id: number
    name: string
    ava: string | null
}

type MessageType = {
    id: number
    msg: string
}
 
const DialogsContainer = (): JSX.Element => {
    return (
        <StoreContext.Consumer>
            { (store: any): any => {
                let state: any = store.getState();
                let dialogs: Array<DialogType> = state.dialogsPage.dialogs;
                let messages: Array<MessageType> = state.dialogsPage.messages;

                const addNewMessage = (): void => {
                    store.dispatch(addMessageActionCreator());
                }

                const changeMessage = (text: string): void => {
                    store.dispatch(updateMessageTextActionCreator(text));
                }

                return <Dialogs dialogs={dialogs}
                    messages={messages}
                    currentMessage={state.dialogsPage.currentMessage}
                    addNewMessage={addNewMessage}
                    changeMessage={changeMessage} />
            }
        }
        </StoreContext.Consumer>
    );
}

export default DialogsContainer;