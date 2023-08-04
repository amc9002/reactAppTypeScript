import styles from './Header.module.css';
import { PropsFromRedux } from './HeaderContainer';

const Header = (props: PropsFromRedux) => {
    return (
        <header className={styles.header}>
            <img src={props.header} alt=''></img>
        </header>
    );
}

export default Header;
