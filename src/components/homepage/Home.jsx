import React from 'react';
import styles from './Home.module.css';

//https://www.acquia.com/blog/accessibility-statistics

export const Home = () => {

    return (
        <div>
            <div className={styles.main}>
                <div className={styles.mainText}>
                    <h1>The Internet isn't a friendly place.<br></br><span><strong>Especially for disabled people.</strong></span></h1>
                    <h3>Across the top 1,000,000 websites on the Internet:</h3>
                    <ul>
                        <li>Homepages contain an average of 56 accessibility errors.</li>
                        <li>96% of homepages contain accessibility errors.</li>
                        <li>81% of homepages contain low-contrast text.</li>
                        <li>21% of homepage images do not have alt text.</li>
                    </ul>
                    <h4>The homepage is one of the most important pages on a website. {/* - and in ways that are very simple to fix - */}When it so frequently fails accessibility tests, what do you think it's like for disabled people to navigate the rest of the Internet?</h4>
                    {/*<p>13% of Americans reported a disability in 2022.</p>
                    <p>During the Covid-10 pandemic, disabled people experienced high stress at double the rate of able-bodied people.</p>
                    <p>More than 15% of disabled people report that their workplaces are not accessible.</p>
                    <br></br>
    <p>And many places on the Internet still don't meet simple accessibility standards for this huge demographic.</p>*/}
                </div>
                <img className={styles.hero} src='https://images.pexels.com/photos/6981085/pexels-photo-6981085.jpeg?auto=compress&cs=tinysrgb&w=1200' alt="A man wearing headphones and sunglasses sits at a computer. He may be reading braille."/>
            </div>
            <div className={styles.factoid}>
                <div>
                    <h2>Did you know?</h2>
                    <p>The "curb cut effect" is the phenomenon where societal developments intended to help disabled people end up benefitting - and being used by - everyone.</p>
                </div>
                <img src='https://upload.wikimedia.org/wikipedia/commons/b/bf/Curb_cut_for_wheelchair_ramp_%28DSC_3616%29.jpg' alt='A curb cut, which is a feature initially designed to make it easier for wheelchair users to make the transition from a sidewalk to a street or vice versa.'></img>  
            </div>
            <div className={styles.targets}>
                <h2>Some of the companies we've acknowledged for their poor accessibility practices:</h2>
                <div className={styles.logos}>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/1/19/LinkedIn_logo.svg' alt='Logo for LinkedIn, a social media company owned by Microsoft.'></img>
                    <img src='https://logos-world.net/wp-content/uploads/2023/08/X-Logo.png' alt='Logo for X, the social media company formerly known as Twitter and currently understood by many to be a trainwreck.'></img>
                    <img className={styles.reddit} src='data:image/png;base64,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' alt='Logo for Reddit, a social media company I waste a lot of time on.'></img>
                </div>
            </div>
            <div className={styles.purpose}>
                <h2 className={styles.featuresHeading}>Some Accessibility Stuff is a little place to show <span>what the internet could be.</span></h2>
                <div className={styles.features}>
                    <div>
                        <img src='https://cdn-icons-png.flaticon.com/128/4717/4717340.png' alt='An icon depicting a cartoon person standing in front of and pointing at a board with information on it.'></img>
                        <p>Explanations and examples of what disabled people deal with when using inaccessible websites.</p>
                    </div>
                    <div>
                        <img src='https://cdn-icons-png.flaticon.com/128/6873/6873778.png' alt='An icon showing a hand with a pointed indext finger that is interacting with a digital screen.'></img>
                        <p>Interactive examples of accessible features that could and should be implemented on websites.</p>
                    </div>
                    <div>
                        <img src='https://cdn-icons-png.flaticon.com/128/702/702814.png' alt='An icon of a lightbulb to represent ideas that people have.'></img>
                        <p>A place for you to suggest ideas for accessible features you think websites should implement.</p>
                    </div>
                </div>
            </div>
            <div className={styles.irony}>
                <h3>One of the horrible ironies of this project is that there will probably be some pretty simple accessibility violations I make in constructing it.<br></br>Let me know if you notice any.</h3>
            </div>
        </div>
    )
}