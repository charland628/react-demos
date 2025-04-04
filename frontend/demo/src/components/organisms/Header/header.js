import logo from '../../../assets/images/yellow-barrels.jpg';
import NavBar from '../../molecules/NavBar/navbar.js';
import styles from './header.module.css';

const Header = () => {
    const siteName = 'Harlandian Organic Foods Corp';
    const altImageText = `Logo for ${siteName}`;

    return (
        <header className={styles.header}>
            <img src={logo} className={styles.logo} alt={altImageText} />
            <h1>{siteName}</h1>

            <NavBar />
        </header>
    );
};

export default Header;
