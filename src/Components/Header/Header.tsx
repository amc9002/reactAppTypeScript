import styles from './Header.module.css';
import { PropsFromRedux } from './HeaderContainer';

const Header = (props: PropsFromRedux) => {
    return (
        <header className={styles.header}>
            <img src={props.header} alt=''></img>
            <div className={styles.loginBlock}>
                {props.login}
            </div>
        </header>
    );
}

export default Header;
