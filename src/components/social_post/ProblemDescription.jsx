import React from 'react';
import styles from './ProblemDescription.module.css';
import { Link } from 'react-router-dom';

export const ProblemDescription = () => {

    const idForVisibilityToggle = 'problemDescriptionToggle';

    //Increase the size of the emojis, so it is easier to see their pros and cons
    //Center the text on the screen with something like a 20% screen width margin on each side
    //Give a clear option to demo a solution, and make it persist regardless of where you scroll. Have a button at the top,
    //and then make it a bar across the bttom that persists until you scroll 95% of the way down?
    return (
        <div className={styles.pageContainer}>
            <div className={styles.problemTitle}>
                <p>🤓🤙🦿👩‍🦯👨🏿‍🦯🍜</p>
                <h1>Inaccessible text in social posts</h1>
                <Link to='demo'><button className={styles.demoButton}>Demo a Solution ▶︎</button></Link>
                {/*<button>Hide Description</button>*/}
            </div>
            {/* Make sure this text is structured appropriately with html tags. Eg, <section>, <p>s, etc. */}
            <div id={idForVisibilityToggle} className={styles.descriptionContainer}>
                <p>
                    Social media platforms give users the control to post almost anything they want. This can be 
                    great for expressing your ideas and creativity, but it can create a horrible experience for disabled people.
                    <br></br>
                    <br></br>
                    When these platforms put so much control in the hands of users creating posts, they often avoid their responsibility 
                    to make sure that content on their website is accessible.
                    <br></br>
                    <br></br>
                    For example, adding hashtags and emojis to posts is common even on professional social networks like LinkedIn. But  
                    many people don't consider what it's like for blind or low-vision people to experience these posts.
                    <br></br>
                    <br></br>
                    <h3>Hashtags</h3>
                    Imagine someone posted about how much fun it is to use social media. If they were writing the post in a way 
                    that is friendly to disabled people, they might use the following hashtag: #SocialMediaIsFun.
                    <br></br>
                    <br></br>
                    You may have 
                    a stylistic preference to use all lowercase letters in your hashtags, but without proper capitalization, 
                    your hashtag may lose all of its meaning for people using screenreaders. Listen to the clips below to hear 
                    for yourself.
                    <h3>Emojis</h3>
                    Symbols can be a quick way to communicate a point, but low-vision users might struggle to understand what
                    you're trying to say.
                    <br></br>
                    <br></br>
                    When someone is using a screenreader to consume content on a website, the screenreader "reads" the emoji by announcing 
                    the alt text associated with it. Alt text is a short description of a visual element which helps low-vision users 
                    understand what is being shown, since they may have a difficult time perceiving it.
                    <br></br>
                    <br></br>
                    I list some common emojis below by their alt text (as read by a 2018 Macbook Pro), the emoji that alt text represents, and how it could  
                    be interpreted by a low-vision user hearing the emoji being read:
                    
                    <h4>Smiling face with glasses: 🤓</h4>
                    <p>This is, in fact, a smiling face with glasses. But is that a sufficient description? The alt text doesn't include any information 
                        about the two large teeth showing through the smile. This extra detail makes it clear to many people that this emoji really 
                        represents a nerd or someone expressing knowledge, and possibly doing so sarcastically. But someone using a screenreader may 
                        interpret this as representing another person with low vision.
                    </p>
                    <h4>Call me hand gesture: 🤙</h4>
                    <p>This is one of my favorite emojis, but I've never used it to indicate that someone should call me. In addition to being the "call 
                        me" gesture, this is also the shaka sign, which is a common symbol in Hawaiian culture. It is often used as an expression 
                        of appreciation and friendly acknowledgement, especially while driving. In surfing culture, it's known as the "hang loose" sign. 
                        Every time I've used this emoji, someone using a screenreader could have been confused by why I was indicating that they should call me.
                    </p>
                    <h4>Robotic leg and foot: 🦿</h4>
                    <p>The library of available emojis has slowly grown to be more inclusive. For example, many emojis have multiple skin tone 
                        options, and there are emojis depicting wheelchair users. But the move toward inclusivity sometimes comes with unclear messaging. 
                        To a person with low vision, the "robotic leg and foot" emoji may sound like a way to represent a piece of a disassembled robot. But the 
                        predominant interpretation and usage is to represent a prosthetic leg. So an emoji that is inclusive to people with limb differences could 
                        actually lose that progress toward communicating inclusivity when it's experienced by someone with low-vision.
                    </p>
                    <h4>Man with dark skin tone with a white cane: 👨🏿‍🦯</h4>
                    <p>Similar to the "robotic leg and foot" emoji, this emoji is a nice step toward inclusivity. And this emoji clearly and concisely 
                        communicates what it depicts: a man using a white cane. Nothing is left up to interpretation. Whereas the "robotic leg and foot" emoji 
                        can lose its meaning due to not clearly calling out the purpose of the leg and foot, this emoji explicitly mentions the white cane.
                    </p>
                </p>
                <div className={styles.descriptionAudio}>
                    <div>
                        <h5>#socialmediaisfun</h5>
                        <audio controls></audio>
                    </div>
                    <div>
                        <h5>#SocialMediaIsFun</h5>
                        <audio controls></audio>
                    </div>
                 </div>
            </div>
        </div>
    )
}