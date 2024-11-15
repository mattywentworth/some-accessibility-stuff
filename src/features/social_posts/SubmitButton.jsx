import React from 'react';
import styles from './SubmitButton.module.css';
import { selectAcknowledgementNeeded } from './acknowledgementSlice';
import { useSelector } from 'react-redux';

export const SubmitButton = () => {

    const acknowledgementNeeded = useSelector(selectAcknowledgementNeeded);

    const handlePostSubmitClick = (e) => {
        e.preventDefault();
        alert(`Here is how the word "emoji" and and the "👨🏿‍🦯" emoji are split into their constituent parts: ${[...'emoji:👨🏿‍🦯']}`);
        if (acknowledgementNeeded) {
            document.getElementById('acknowledgement-container').style.display = 'block';
        } else {
            alert('still need to add update to state with post content');
        }
    }

    return (
        <div>
            <button className={styles.submitButton} onClick={handlePostSubmitClick} type='submit'>Submit Post</button>
        </div>
    )
}