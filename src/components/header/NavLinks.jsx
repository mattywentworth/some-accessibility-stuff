import React from 'react';
import { NavLink } from './NavLink';
import styles from './NavLinks.module.css';

export const NavLinks = () => {

    return (
        <div className={styles.navlinksContainer}>
            {/* Make this a ul when you actually build it out */}
            <NavLink />
            <NavLink />
        </div>
    )
}