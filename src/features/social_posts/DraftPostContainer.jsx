import React from 'react';
import { DemoDirections } from './DemoDirections';
import { PostTextInput } from './PostTextInput';
import { SubmitButton } from './SubmitButton';
import { ErrorSidebar } from './ErrorSidebar';
import { Acknowledgement } from './Acknowledgement';
import { KnownShortcomings } from './KnownShortcomings';
import styles from './DraftPostContainer.module.css';


//Include a nav element to go to the prior page
export const DraftPostContainer = () => {

    return (
        <div className={styles.container}>
            <DemoDirections />
            <div className={styles.subContainer}>
                <form className={styles.inputAndButtonContainer}>
                    <PostTextInput />
                    <SubmitButton />
                </form>
                <ErrorSidebar />
            </div>
            <Acknowledgement />
            <KnownShortcomings />
        </div>
    )
}