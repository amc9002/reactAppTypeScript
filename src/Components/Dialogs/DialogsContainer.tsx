import Dialogs from './Dialogs';
import { addMessageActionCreator, updateMessageTextActionCreator } from '../../Redux/message-reducer';
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

type mapDispatchToPropsType = {
    changeMessage: Function
    addNewMessage: Function
    }

const mapDispatchToProps = (dispatch: Function): mapDispatchToPropsType => {
    return {
        changeMessage: (text: string) => { dispatch(updateMessageTextActionCreator(text)) },
        addNewMessage: () => { dispatch(addMessageActionCreator()) }
    }
}

const connector = connect(mapStateToProps, mapDispatchToProps);
export type PropsFromRedux = ConnectedProps<typeof connector>;
const DialogsContainer = connector(Dialogs);

export default DialogsContainer;