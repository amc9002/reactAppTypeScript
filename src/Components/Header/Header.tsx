import styles from './Header.module.css';

const Header = (props: any) => {
    return (
        <header className={styles.header}>
            <img src={props.header} alt=''></img>
        </header>
    );
}

export default Header;
