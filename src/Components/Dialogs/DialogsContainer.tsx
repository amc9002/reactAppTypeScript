import Dialogs from './Dialogs';
import { addMessageActionCreator, updateMessageTextActionCreator } from '../../Redux/message-reducer';
import { connect } from 'react-redux';

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