import React from 'react';
import styles from './Acknowledgement.module.css';

export const Acknowledgement = () => {

    return (
        <div className={styles.container}>
            <p className={styles.text}>By clicking the checkbox below, you acknowledge that your post may contain accessibility 
                violations that could make it difficult for disabled people to experience it. Please 
                help us make the Internet a more inclusive place, and consider making the suggested changes 
                before submitting this post.                
            </p>
            <form className={styles.acknowledgementForm}>
                <div>
                    <label className={styles.label} for='acknowledgement-checkbox'>I Acknowledge</label>
                    <input className={styles.checkbox} type='checkbox' id='acknowledgement-checkbox'></input>
                </div>
                <button className={styles.submit}>Return to Draft of Post</button>
            </form>
        </div>
    )
}