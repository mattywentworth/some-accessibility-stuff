import React from 'react';
import styles from '../social_posts/ErrorSidebar.module.css';
import { useSelector } from 'react-redux';
import { selectLowercaseHashtags } from './lowercaseHashtagsSlice';
import { HashtagConcerns } from './HashtagConcerns';

export const ErrorSidebarHashtags = () => {

    const filteredHashtags = useSelector(selectLowercaseHashtags);
    /*const emojisWithinASentence = useSelector(selectEmojisWithinASentence);
    const consecutiveEmojis = useSelector(selectConsecutiveEmojis);*/

    let violationMessage;
    if (filteredHashtags.length > 0) {
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
                <HashtagConcerns />
                {/*<EmojiConcerns />*/}
            </div>
        </div>
    )
}