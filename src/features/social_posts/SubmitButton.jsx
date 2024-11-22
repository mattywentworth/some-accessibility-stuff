import React from 'react';
import styles from './SubmitButton.module.css';
import { selectAcknowledgementNeeded } from './acknowledgementSlice';
import { selectSocialPostText } from './socialPostTextSlice'; //importing temporarily to write and test initial hashtag inentification js
import { useSelector } from 'react-redux';

export const SubmitButton = () => {

    const acknowledgementNeeded = useSelector(selectAcknowledgementNeeded);

    /* BEGIN TEST CODE - MOVE TO ANOTHER FILE WHEN FINISHED */
    
    const socialPostText = useSelector(selectSocialPostText);
    
    
    /*const findHashtags = () => {
        const testRegex = /\s/;
        const wordsFromSocialPostText = socialPostText.split(testRegex);
        const hashtagsFromSocialPostText = wordsFromSocialPostText.filter(word => {
            return word[0] === '#';
        });
        const cleanedHashtagsFromSocialPostText = hashtagsFromSocialPostText.map(word => {
            const lastIndexOfWord = word.length - 1;
            if (word === word.toLowerCase()) {
                if (word[lastIndexOfWord] === '.' || word[lastIndexOfWord] === '?' || word[lastIndexOfWord] === '!') {
                    return word.slice(0, lastIndexOfWord);
                } else {
                    return word;
                }
            }
        })
        //alert(cleanedHashtagsFromSocialPostText);
        return cleanedHashtagsFromSocialPostText;
    }*/

    
    

    /*const thirdWord = wordsFromSocialPostText[2]
    const lastIndex = thirdWord.length - 1;
    const lastChar = thirdWord[lastIndex];*/


    /* END TEST CODE - MOVE TO ANOTHER FILE WHEN FINISHED */

    const handlePostSubmitClick = (e) => {
        e.preventDefault();
        //alert(lastChar);
        //findHashtags();
        //alert(`Here is how the word "emoji" and and the "👨🏿‍🦯" emoji are split into their constituent parts: ${[...'emoji:👨🏿‍🦯']}`);
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