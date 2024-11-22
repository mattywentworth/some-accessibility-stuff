import React from 'react';
import styles from '../social_posts/PostTextInput.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { selectSocialPostText, updatePostText } from '../social_posts/socialPostTextSlice';
import { findLowercaseHashtags, testFunc } from './lowercaseHashtagsSlice';

export const PostTextInputHashtags = () => {

    const dispatch = useDispatch();
    const socialPostText = useSelector(selectSocialPostText);

    const handleTextInputChange = (e) => {
        const textInput = e.target.value;
        dispatch(updatePostText(textInput));
        dispatch(findLowercaseHashtags(textInput));
        //dispatch(testFunc(textInput));
    }

    const handleHashtagExtraction = (string) => {
        //const arrayofChars = [...string];
        const arrayOfWords = string.split(' ');
        const hashtagsInArray = arrayOfWords.filter(word => word.startsWith('#') === true);
        console.log(hashtagsInArray);
        return hashtagsInArray;
    }

    const findHashtags = () => {
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
    }

    return (
        <>
            <textarea id='text-input-hashtags-post' value={socialPostText} onChange={handleTextInputChange} className={styles.input} placeholder='What&#39;s on your mind?'></textarea>
        </>
    )
}