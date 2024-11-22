import React from 'react';
import { useDispatch } from 'react-redux';
import { updatePostText } from './socialPostTextSlice';
import { checkConsecutiveEmojis, checkEmojiPlacementInSentences } from './emojisSlice';
import styles from './DemoDirections.module.css';

export const DemoDirections = () => {
    
    const dispatch = useDispatch();

    const sampleText = 'Emojis can be a powerful 💪 and fun 🥳 element of visual communication. But people experience emojis differently. And poor use of emojis can be particularly confusing, frustrating, and grating for low-vision 🦯😎 people.'

    const testFunc = (e) => {
        e.preventDefault();
        const textInput = document.getElementById('text-input-emoji-post');
        let typedPostText = '';
        const sampleTextArray = [...sampleText];
        let i = 0;
        const interval = setInterval(() => {
            if (i === sampleText.length - 1) {
                clearInterval(interval);
            }
            typedPostText += sampleText[i];
            dispatch(updatePostText(typedPostText));
            dispatch(checkConsecutiveEmojis(typedPostText));
            dispatch(checkEmojiPlacementInSentences(typedPostText));
            i += 1;
        }, 50)
        //dispatch(updatePostText(testValue));

    }

    return (
        <div className={styles.container}>
            <h1>Interactive Demo: Handling Inaccessible Emoji Use In Social Posts</h1>
            <div>
                <p>This demo shows functionality that social media platforms could implement to encourage users to create more accessible posts. There is a text box below with the placeholder text, "What's on your mind?" To use the demo, type in the text box as if you were writing a post for one of your social media accounts. Make sure your message contains at least 2 consecutive emojis and at least one emoji in the middle of a sentence.</p>
                <br></br>
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