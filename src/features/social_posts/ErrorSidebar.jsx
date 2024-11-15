import React from 'react';
import styles from './ErrorSidebar.module.css';
import { EmojiConcerns } from './EmojiConcerns';
import { selectEmojisWithinASentence, selectConsecutiveEmojis } from './emojisSlice';
import { useSelector } from 'react-redux';

export const ErrorSidebar = () => {

    const emojisWithinASentence = useSelector(selectEmojisWithinASentence);
    const consecutiveEmojis = useSelector(selectConsecutiveEmojis);

    let violationMessage;
    if (emojisWithinASentence || consecutiveEmojis) {
        violationMessage = <p>Please Address The Following Accessibility Concerns:</p>
    } else {
        violationMessage = <p>If we detect possible accessibility issues with the content of your post, we will display them below.</p>
    }
    

    return (
        <div className={styles.container}>
            <div className={styles.topHeaderSection}>
                {/*<p>If you want to include hashtags made up of multiple words, please capitalize each word within the hashtag. 
                For example, <strong>#CareerAdvice</strong> instead of <strong>#careeradvice</strong>.
                </p>*/}
                {/*<br></br>*/}
                {/*<p>If we detect any possible accessibility issues with the content of your post, we will display them below.</p>*/}
                {violationMessage}
            </div>
            <div>
                <EmojiConcerns />
            </div>
        </div>
    )
}