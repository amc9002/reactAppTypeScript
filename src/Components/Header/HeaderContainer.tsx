import { connect, ConnectedProps } from 'react-redux';
import { RootStateType } from '../../Redux/redux-store';
import Header from './Header';

type MapStateToPropsType = {
    header: string
    }

const mapStateToProps = (state: RootStateType): MapStateToPropsType  => {
    return {
        header: state.header
    }
}

const connector = connect(mapStateToProps,);
export type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Header);