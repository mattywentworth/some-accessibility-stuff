import React from 'react';
import styles from './ErrorSidebar.module.css';

export const ErrorSidebar = () => {

    return (
        <div className={styles.container}>
            <p>If we detect any possible accessibility issues with the content of your post, we will display them below.</p>
            <br></br>
            <p>If your post contains hashtags made up of multiple words, please capitalize each word within the hashtag. 
                For example, <strong>#CareerAdvice</strong> instead of <strong>#careeradvice</strong>.
            </p>
        </div>
    )
}