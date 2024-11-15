import React from 'react';
import styles from './Acknowledgement.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectConsecutiveEmojis, selectEmojisWithinASentence } from './emojisSlice';
import { selectAcknowledgementNeeded, selectAcknowledgementClicked, toggleAcknowledgementNeeded, toggleAcknowledgementClicked } from './acknowledgementSlice';

export const Acknowledgement = () => {

    const dispatch = useDispatch();
    const consecutiveEmojis = useSelector(selectConsecutiveEmojis);
    const emojisWithinASentence = useSelector(selectEmojisWithinASentence);
    
    const acknowledgementNeeded = useSelector(selectAcknowledgementNeeded);
    const acknowledgementClicked = useSelector(selectAcknowledgementClicked);

    if (!acknowledgementClicked && (consecutiveEmojis || emojisWithinASentence)) {
        dispatch(toggleAcknowledgementNeeded(true));
    }

    const handleCheckboxClick = () => {
        const checkboxElement = document.getElementById('acknowledgement-checkbox');
        if (checkboxElement.checked) {
            dispatch(toggleAcknowledgementClicked(true));
            //dispatch(toggleAcknowledgementNeeded(false));
        } else if (!checkboxElement.checked) {
            dispatch(toggleAcknowledgementClicked(false));
            //dispatch(toggleAcknowledgementNeeded(true));
        }
        //!checkboxElement.checked ? dispatch(toggleAcknowledgementClicked(true)) : dispatch(toggleAcknowledgementClicked(false));
    }

    let acknowledgementWindowClosed = false;
    

    const handleAcknowledgementFormSubmission = (e) => {
        e.preventDefault();
        //const checkboxElement = document.getElementById('acinowledgement-checkbox');
        if (acknowledgementClicked) {
            //updateAcknowledgementState
            //make acknowledgement window hidden
            document.getElementById('acknowledgement-container').style.display = 'none';
            dispatch(toggleAcknowledgementNeeded(false));
            acknowledgementWindowClosed = true;
        }
    }

    //write if then which includes checkbox/acknowledgement being made

    return (
        <div id='acknowledgement-container' className={styles.containerVisTest}> {/*acknowledgementNeeded ? styles.containerVisible : styles.containerHidden*/}
            <div className={styles.acknowledgementBox}>
                <p className={styles.text}>By clicking the checkbox below, you acknowledge that your post may contain accessibility 
                    violations that could make it difficult for disabled people to experience it. Please 
                    help us make the Internet a more inclusive place, and consider making the suggested changes 
                    before submitting this post.                
                </p>
                <form className={styles.acknowledgementForm}>
                    <div>
                        <label className={styles.label} for='acknowledgement-checkbox'>I Acknowledge</label>
                        <input className={styles.checkbox} type='checkbox' id='acknowledgement-checkbox' onClick={handleCheckboxClick}></input>
                    </div>
                    <button className={styles.submit} type='submit' onClick={handleAcknowledgementFormSubmission}>Return to Draft of Post</button>
                </form>
            </div>
        </div>
    )
}