import React from 'react';
import { Logo } from './Logo';
import { NavLinks } from './NavLinks';
import styles from './Nav.module.css';

export const Nav = () => {

    return (
        <nav className={styles.navContainer}>
            <Logo />
            <NavLinks />
        </nav>
    )
}