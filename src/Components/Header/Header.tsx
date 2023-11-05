import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import { PropsFromRedux } from './HeaderContainer';

const Header = (props: PropsFromRedux) => {
    return (
        <header className={styles.header}>
            <img src={props.header} alt=''></img>
            <div className={styles.loginBlock}>
                props.isAuth ? props.login : <NavLink to={ '/login' }>Login</NavLink>
            </div>
        </header>
    );
}

export default Header;
