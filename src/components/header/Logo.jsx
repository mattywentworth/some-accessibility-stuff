import React from 'react';
import styles from './Logo.module.css';
import { Link } from 'react-router-dom';

export const Logo = () => {
    return (
        <div className={styles.logo}>
            <Link>
                <p>Some</p>
                <p>Accessibility Stuff</p>
                {/*<p>Stuff</p>*/}
            </Link>
            <div className={styles.stripes}>
                <div className={styles.red}></div>
                <div className={styles.yellow}></div>
                <div className={styles.white}></div>
                <div className={styles.blue}></div>
                <div className={styles.green}></div>
            </div>
        </div>
    )
}