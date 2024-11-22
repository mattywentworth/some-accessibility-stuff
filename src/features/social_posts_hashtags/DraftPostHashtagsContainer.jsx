import React from 'react';
import styles from '../social_posts/DraftPostContainer.module.css';
import { DemoDirectionsHashtags } from './DemoDirectionsHashtags';
import { PostTextInputHashtags } from './PostTextInputHashtags';
import { SubmitButtonHashtags } from './SubmitButtonHashtags';
import { ErrorSidebarHashtags } from './ErrorSidebarHashtags';


export const DraftPostHashtagsContainer = () => {

    return (
        <div>
            <div className={styles.container}>
                <DemoDirectionsHashtags />
                <div className={styles.subContainer}>
                    <form className={styles.inputAndButtonContainer}>
                        <PostTextInputHashtags />
                        <SubmitButtonHashtags />
                    </form>
                    <ErrorSidebarHashtags />
                </div>
                {/*<Acknowledgement />
                <KnownShortcomings />*/}
            </div>
        </div>
    )
}