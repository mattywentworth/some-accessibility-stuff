import React, { useState } from 'react';
import styles from './PostTextInput.module.css';


export const PostTextInput = () => {

    const [postText, setPostText] = useState('');

    return (
        <textarea className={styles.input} placeholder='What&#39;s on your mind?'></textarea>
    )
}