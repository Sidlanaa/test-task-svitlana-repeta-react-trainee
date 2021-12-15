import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';


const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.navbarLinks}>
                <div className={`${styles.item}`}>
                    <NavLink to="/home">Home</NavLink>
                </div>
                <div className={`${styles.item}`}>
                    <NavLink to="/table">Table</NavLink>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;