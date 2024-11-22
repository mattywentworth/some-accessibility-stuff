import React from 'react';
import styles from '../social_posts/SubmitButton.module.css';

export const SubmitButtonHashtags = () => {

    const handlePostSubmitClick = (e) => {
        /*if (acknowledgementNeeded) {
            document.getElementById('acknowledgement-container').style.display = 'block';
        } else {
            alert('still need to add update to state with post content');
        }*/
       return;
    }

    return (
        <div>
            <button className={styles.submitButton} onClick={handlePostSubmitClick} type='submit'>Submit Post</button>
        </div>
    )
}