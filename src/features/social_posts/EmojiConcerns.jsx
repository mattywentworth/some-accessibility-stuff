import React, { useState } from 'react';
import styles from './EmojiConcerns.module.css';
import { selectConsecutiveEmojis, selectEmojisWithinASentence } from './emojisSlice';
import { useSelector } from 'react-redux';

export const EmojiConcerns = () => {

    const [consecutiveInfoHidden, setConsecutiveInfoHidden] = useState(true);
    const [withinSentenceInfoHidden, setWithinSentenceInfoHidden] = useState(true);

    const consecutiveEmojis = useSelector(selectConsecutiveEmojis);
    const emojisWithinASentence = useSelector(selectEmojisWithinASentence);

    let emojiConcernDetected;
    if (consecutiveEmojis || emojisWithinASentence) {
        emojiConcernDetected = true;
    } else {
        emojiConcernDetected = false;
    }

    const infoHiddenHeader = '▼ Click To Learn More ▼';
    const infoVisibleHeader = '▲ Click To Hide Information ▲';

    let consecutiveInfoHeader;
    if (consecutiveInfoHidden === true) {
        consecutiveInfoHeader = infoHiddenHeader;
    } else if (consecutiveInfoHidden === false) {
        consecutiveInfoHeader = infoVisibleHeader;
    }

    const handleConsecutiveInfoHeaderClick = () => {
        consecutiveInfoHidden ? setConsecutiveInfoHidden(false) : setConsecutiveInfoHidden(true);
    }

    let withinSentenceInfoHeader;
    if (withinSentenceInfoHidden === true) {
        withinSentenceInfoHeader = infoHiddenHeader;
    } else if (withinSentenceInfoHidden === false) {
        withinSentenceInfoHeader = infoVisibleHeader;
    }

    const handleWithinSentenceInfoHeaderClick = () => {
        withinSentenceInfoHidden ? setWithinSentenceInfoHidden(false) : setWithinSentenceInfoHidden(true);
    }

    return (
        <div className={emojiConcernDetected ? styles.containerVisible : styles.containerHidden}>
            <h4>Emoji Usage</h4>
            <p>Emojis are a useful communication tool, but it's possible to misuse them.</p>
            <div className={consecutiveEmojis ? styles.consecutiveEmojisVisible : styles.consecutiveEmojisHidden}>
                <h5>Consecutive Emojis</h5>
                <p>It looks like your post contains consecutive emojis. Please edit your string of emojis so that it contains one emoji that most effectively 
                    communicates your message.
                </p>
                <h6 onClick={handleConsecutiveInfoHeaderClick}>{consecutiveInfoHeader}</h6>
                <div id='consecutive-info-container' className={consecutiveInfoHidden ? styles.consecutiveInfoContainerHidden : styles.consecutiveInfoContainerVisible}>
                    <p>Using multiple emojis in a row can make it challenging for people with low vision to experience your post. Check out this video to hear what it's like for screenreaders to read strings of emojis:</p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/0XJBIUH_o4w?si=tIIY2ClmTCq7X7TC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>
            <div className={emojisWithinASentence ? styles.emojisWithinASentenceVisible : styles.emojisWithinASentenceHidden}>
                <h5>Emojis Within Sentences</h5>
                <p>It looks like your post contains emojis within a sentence. Please only use an emoji at the end of sentences or, ideally, only at the end of your post.
                </p>
                <h6 onClick={handleWithinSentenceInfoHeaderClick}>{withinSentenceInfoHeader}</h6>
                <div id='within-sentence-info-container' className={withinSentenceInfoHidden ? styles.withinSentenceInfoContainerHidden : styles.withinSentenceInfoContainerVisible}>
                    <p>Users with typical vision can often easily process or filter out emojis that show within a sentence. But this can be challenging for low-viision users. These users are expecting each piece of content to be contextually relevant and add to the meaning of what is being communicated. But since emojis are read by screenreaders according to their rigid alt text rather than the context in which they are written, they can render the entire sentence unintelligible and confusing.</p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/0XJBIUH_o4w?si=tIIY2ClmTCq7X7TC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>
            
        </div>
    )
}