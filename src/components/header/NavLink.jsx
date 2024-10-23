import React from 'react';
import styles from './NavLink.module.css';
import { Link } from 'react-router-dom';

export const NavLink = () => {

    return (
        <Link to='social-post-text' className={styles.navlink}>Social Posts</Link>
    )
}