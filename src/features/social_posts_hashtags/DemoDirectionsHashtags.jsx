import React from 'react';
import styles from '../social_posts/DemoDirections.module.css'
import { useDispatch } from 'react-redux';
import { updatePostText } from '../social_posts/socialPostTextSlice';
import { findLowercaseHashtags } from './lowercaseHashtagsSlice';

export const DemoDirectionsHashtags = () => {

 
    const dispatch = useDispatch();

    const sampleText = `Using hashtags in your social media posts can increase the number of people that see those posts. But cramming multiple uncapitalized words into your hashtags makes them difficult for low-vision users to read.\n\n#socialmedia #socialmediaMarketing #DigitalMarketing #marketing #dopaminehits`

    const testFunc = (e) => {
        e.preventDefault();
        const textInput = document.getElementById('text-input-hasthags-post');
        let typedPostText = '';
        const sampleTextArray = [...sampleText];
        let i = 0;
        const interval = setInterval(() => {
            if (i === sampleText.length - 1) {
                clearInterval(interval);
            }
            typedPostText += sampleText[i];
            dispatch(updatePostText(typedPostText));
            dispatch(findLowercaseHashtags(typedPostText));
            //dispatch(checkConsecutiveEmojis(typedPostText));
            //dispatch(checkEmojiPlacementInSentences(typedPostText));
            i += 1;
        }, 50)
        //dispatch(updatePostText(testValue));

    }

    return (
        <div className={styles.container}>
            <h1>Interactive Demo: Handling Inaccessible Hashtag Use In Social Posts</h1>
            <div>
                <p>This demo shows functionality that social media platforms could implement to encourage users to create more accessible posts. There is a text box below with the placeholder text, "What's on your mind?" To use the demo, type in the text box as if you were writing a post for one of your social media accounts. Make sure your message contains:</p>
                <ul>
                    <li>At least 1 hashtag that contains multiple words and all lowercase text. For example: #socialmedia</li>
                    <li>At least 1 hashtag that contains multiple words and one capitalized letter. For example: #socialmediaMarketing</li>
                    <li>At least 1 hashtag that contains multiple capitalized words. For example: #DigitalMarketing</li>
                    <li>At least 1 hashtag that contains a single uncapitalized word. For example: #marketing</li>
                </ul>
                <br></br>
                <p>{sampleText}</p>
                <div className={styles.autoTypeContainer}>
                    <p>Alternatively, you can let me type a message for you:</p>
                    <button onClick={testFunc} className={styles.textGeneratorButton}>Generate Sample Text</button>
                </div>
                <br></br>
                <p>At the bottom of this page, I detail some known shortcomings to the functionality.</p>
            </div>
        </div>
    )
}