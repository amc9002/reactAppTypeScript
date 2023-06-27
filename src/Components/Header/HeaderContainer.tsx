import { connect } from 'react-redux';
import Header from './Header';

const mapStateToProps: any = (state: any) => {
    return {
        header: state.header
    }
}

const HeaderContainer = connect(mapStateToProps, )(Header);

export default HeaderContainer;