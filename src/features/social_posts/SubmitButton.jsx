import React from 'react';
import styles from './SubmitButton.module.css';

export const SubmitButton = () => {

    return (
        <div>
            <button className={styles.submitButton} type='submit'>Submit Post</button>
        </div>
    )
}