import React from 'react';
import styles from './ErrorSidebar.module.css';

export const ErrorSidebar = () => {

    return (
        <div className={styles.container}>
            <div>If we detect any accessibility issues with the content of your post, we will display them here.</div>
        </div>
    )
}