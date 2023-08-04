import styles from './Navbar.module.css';
import { NavLink } from "react-router-dom";
import { PropsFromRedux } from './NavbarContainer';
import { MenuButtonType } from '../../types';

const Navbar = (props: PropsFromRedux): JSX.Element => {
    const getClassName: Function = (props: { isActive: boolean, isPending: boolean }) =>
        props.isPending ? styles.pending : props.isActive ? styles.active : "";
    let menuToJsx: Array<JSX.Element> = props.sidebar.map((p: MenuButtonType) =>
        <div className={styles.item}>
            <NavLink to={p.navLink} key={p.id} className={getClassName as unknown as string}>
                {p.link}
            </NavLink>
        </div>);

    return (
        <div className={styles.nav} >
            <nav>
                {menuToJsx}
            </nav>
        </div>

    );
}

export default Navbar;
