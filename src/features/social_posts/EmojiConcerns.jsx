import React from 'react';
import styles from './EmojiConcerns.module.css';
import { selectConsecutiveEmojis, selectEmojisWithinASentence } from './emojisSlice';
import { useSelector } from 'react-redux';

export const EmojiConcerns = () => {

    const consecutiveEmojis = useSelector(selectConsecutiveEmojis);
    const emojisWithinASentence = useSelector(selectEmojisWithinASentence);

    let emojiConcernDetected;
    if (consecutiveEmojis || emojisWithinASentence) {
        emojiConcernDetected = true;
    } else {
        emojiConcernDetected = false;
    }

    return (
        <div className={emojiConcernDetected ? styles.containerVisible : styles.containerHidden}>
            <h4>Emoji Usage</h4>
            <p>Emojis are a useful communication tool, but it's possible to misuse them.</p>
            <div className={consecutiveEmojis ? styles.consecutiveEmojisVisible : styles.consecutiveEmojisHidden}>
                <h5>Consecutive Emojis</h5>
                <p>It looks like your post contains consecutive emojis. This can make it challenging for people with low vision 
                    to experience your post. Please edit your string of emojis so that it contains one emoji that most effectively 
                    communicates your message.
                </p>
            </div>
            <div className={emojisWithinASentence ? styles.emojisWithinASentenceVisible : styles.emojisWithinASentenceHidden}>
                <h5>Emojis Within Sentences</h5>
                <p>It looks like your post contains emojis within a sentence. To minimize confusion for low-vision users, please only 
                    use emojis at the end of sentences or ideally only at the end of your post.
                </p>
            </div>
            <h5>Check out this video to hear what it's like for screenreaders to read strings of emojis:</h5>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/0XJBIUH_o4w?si=tIIY2ClmTCq7X7TC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    )
}