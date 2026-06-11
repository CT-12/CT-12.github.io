import { Link } from "react-router";
import styles from './navbar.module.css';

export default function Navbar() {
    return (
    <div className={styles.var}>
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <span className={styles.logoIcon}>◆</span>
                <span>CT HALL</span>
            </div>

            <div className={styles.navLinks}>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/quests">Quests</Link>
            </div>
        </nav>
    </div>
    );
}