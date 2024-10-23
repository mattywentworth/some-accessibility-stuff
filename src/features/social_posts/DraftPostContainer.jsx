import React from 'react';
import { PostTextInput } from './PostTextInput';
import { SubmitButton } from './SubmitButton';
import { ErrorSidebar } from './ErrorSidebar';
import { Acknowledgement } from './Acknowledgement';
import styles from './DraftPostContainer.module.css';

export const DraftPostContainer = () => {

    return (
        <div className={styles.container}>
            <div className={styles.subContainer}>
                <form className={styles.inputAndButtonContainer}>
                    <PostTextInput />
                    <SubmitButton />
                </form>
                <ErrorSidebar />
            </div>
            <Acknowledgement />
        </div>
    )
}