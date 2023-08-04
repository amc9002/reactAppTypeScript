import { connect, ConnectedProps } from 'react-redux';
import { RootStateType } from '../../Redux/redux-store';
import { MenuButtonType } from '../../types';
import Navbar from './Navbar';

type mapStateToPropsType = {
    sidebar: Array<MenuButtonType>
}

const mapStateToProps = (state: RootStateType): mapStateToPropsType => {
    return {
        sidebar: state.sidebar
    }
}

const connector = connect(mapStateToProps, );
const NavbarContainer = connect(mapStateToProps,)(Navbar);
export type PropsFromRedux = ConnectedProps<typeof connector>;

export default NavbarContainer;