import { connect } from 'react-redux';
import Navbar from './Navbar';

const mapStateToProps: any = (state: any) => {
    return {
        sidebar: state.sidebar
    }
}

const NavbarContainer = connect(mapStateToProps, )(Navbar);

export default NavbarContainer;