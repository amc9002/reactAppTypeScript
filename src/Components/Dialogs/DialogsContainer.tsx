import Dialogs from './Dialogs';
import { addMessageActionCreator, updateMessageTextActionCreator } from '../../Redux/message-reducer';
import { connect } from 'react-redux';

type DialogType = {
    id: number
    name: string
    ava: string | null
}

type MessageType = {
    id: number
    msg: string
}

type DialogsStateType = {
    dialogs: Array<DialogType>
    currentMessage: string
    messages: Array<MessageType>
}

type MapStateToPropsType = { dialogsPage: DialogsStateType }

const mapStateToProps: any = (state: any) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

const mapDispatchToProps: any = (dispatch: Function): any => {
    return {
        changeMessage: (text: string) => { dispatch(updateMessageTextActionCreator(text)) },
        addNewMessage: () => { dispatch(addMessageActionCreator()) }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;