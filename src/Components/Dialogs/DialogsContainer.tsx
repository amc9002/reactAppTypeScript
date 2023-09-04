import Dialogs from './Dialogs';
import { addMessage, updateMessage } from '../../Redux/message-reducer';
import { connect, ConnectedProps } from 'react-redux';
import { RootStateType } from '../../Redux/redux-store';
import { DialogsStateType } from '../../types';

const mapStateToProps = (state: RootStateType): DialogsStateType => {
    return {
        dialogs: state.dialogsPage.dialogs,
        currentMessage: state.dialogsPage.currentMessage,
        messages: state.dialogsPage.messages
    }
}

const connector = connect(mapStateToProps, { updateMessage, addMessage });
export type PropsFromRedux = ConnectedProps<typeof connector>;
const DialogsContainer = connector(Dialogs);

export default DialogsContainer;