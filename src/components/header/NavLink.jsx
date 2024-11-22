import React from 'react';
import styles from './NavLink.module.css';
import { Link } from 'react-router-dom';

export const NavLink = ( { linkText, urlExt } ) => {

    return (
        <Link to={urlExt} className={styles.navlink}>{linkText}</Link>
    )
}