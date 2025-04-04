import { Link } from "react-router-dom";
import styles from './navbar.module.css';

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/js-concepts">JavaScript Concepts</Link>
                </li>
                <li>
                    <Link to="/react-forms">React Forms</Link>
                </li>
                <li>
                    <Link to="/react-apis">React APIs</Link>
                </li>
                <li>
                    <Link to="/react-games">React Games</Link>
                </li>
                <li className={styles.dropdown}>
                    <Link to="#" className={styles.dropdownButton}>React Components</Link>
                    <div className={styles.dropdownContent}>
                        <Link to="class-components">Class Components</Link>
                        <Link to="function-components">Function Components</Link>
                    </div>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
