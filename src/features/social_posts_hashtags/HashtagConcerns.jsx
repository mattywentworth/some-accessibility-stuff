import React from 'react';
import styles from '../social_posts/EmojiConcerns.module.css';
import { selectLowercaseHashtags } from './lowercaseHashtagsSlice';
import { useSelector } from 'react-redux';

export const HashtagConcerns = () => {

    const lowercaseHashtagsArray = useSelector(selectLowercaseHashtags);

    // BEG OF TEST - DELETE AND MOVE TO ANOTHER COMPONENT WHEN FINISHED
    //Should I get a simple object or array from ChatGPT and then transform it into a more useful object to map in the jsx?
    const testHashtagArray = [
        {
            id: 1,
            originalHash: '#socialmedia',
            updatedHash: '#SocialMedia',

        },
        {
            id: 2,
            originalHash: '#artificialintelligence',
            updatedHash: '#ArtificialIntelligence'
        },
        {
            id: 3,
            originalHash: '#careeradvice',
            updatedHash: '#CareerAdvice'
        }
    ];

    //Need to add to state which checkboxes are selected and unselected and then write a function that updates state with the new hashtags
    //Somehow track the number of checked boxes and insert the count into the text in the submit button. Eg, "update X hashtags"

    // END OF TEST - DELETE AND MOVE TO ANOTHER COMPONENT WHEN FINISHED

    return (
        <div>
            <div>
                <h4>Hashtag Usage</h4>
                <p>Hashtags are useful for increasing your post's visibility, but it's possible to misuse them.</p>
                <div className={lowercaseHashtagsArray.length > 0 ? styles.consecutiveEmojisVisible : styles.consecutiveEmojisHidden}>
                    <h5>Consecutive Emojis</h5>
                    <p>It looks like your post contains consecutive emojis. Please edit your string of emojis so that it contains one emoji that most effectively 
                        communicates your message.
                    </p>
                    {/*<h6 onClick={handleConsecutiveInfoHeaderClick}>{consecutiveInfoHeader}</h6>*/}
                    <div id='consecutive-info-container' >
                        <p>Using multiple emojis in a row can make it challenging for people with low vision to experience your post. Check out this video to hear what it's like for screenreaders to read strings of emojis:</p>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/0XJBIUH_o4w?si=tIIY2ClmTCq7X7TC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
            <form>
                {testHashtagArray.map(element => {

                    return (
                        <div key={element.id}>
                            <input id={`hash${element.id}`} value={element.updatedHash} type='checkbox'></input>
                            <label for={`hash${element.id}`}>{element.updatedHash}</label>
                        </div>
                    )
                })}
                <button type='submit'>Update X Hashtags</button>
            </form>
        </div>
    )
}