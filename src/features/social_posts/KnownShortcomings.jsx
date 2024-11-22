import React from 'react';

export const KnownShortcomings = () => {

    const textToSplit = 'emoji 👨🏿‍🦯';
    const splitText = [...textToSplit];


    /*Should I come up with a way to type these up separately so that it can be mapped over and populated in the recycled element?
    const testText = [
        {text: 
            <div>
                <p>This is a test.</p>
                <h5>Does this work?</h5>
                <p>More of a test.</p>
            </div>
        }
    ]
    */

    return (
        <div>
            <h3>Known Shortcomings</h3>
            <h4>Less than 100% confidence about accessibility violations</h4>
            <p>I'm a relative novice at writing code and understanding many technical subjects. As I will address in the next 
                known shortcoming, detecting emojis consistently and accurately is more challenging than I expected. While I 
                may have been able to spend more time learning and develop a more comprehensive solution, I wanted to get some form of a 
                solution built rather than focusing on it being perfect. Being one relatively inexperienced person working 
                toward a solution, I think this approach is tolerable. I would expect more from companies like LinkedIn, 
                Reddit, and Twitter. I wouldn't expect more from X.
            </p>
            <h4>Detecting emojis consistently</h4>
            <p>Working on this project led me to some interesting information on how text characters are interpreted by 
                programs and how complex emojis can be. It's realtively simple to write some javascript that analyzes a 
                sentence and determines if that sentence contains, for example, the letter 'a' and how many times that letter appears in 
                the sentence. Similarly, I assumed there would be a straightforward way to identify emojis. Unfortunately, 
                this seems to not be the case. Since this website focuses on accessibility and inclusion, I wanted to use 
                the "man with dark skin tone with a white cane" emoji in the demo above. And I assumed there would be a simple code to reference 
                this emoji or that I could easily refer to a range of codes that all known emojis fall within. It turns out that 
                emojis have a somewhat complex code structure and don't neatly fit into a range of values that can easily be 
                isolated. For example, the "man with dark skin tone with a white cane emoji" is created by combining other emojis 
                into a single emoji. The computer shows the emoji as a single character, similar to how a letter is shown as a single 
                character. But using javascript to try to isolate the emoji leads to it being shown as the multiple emojis that 
                comprise it. It then becomes difficult to determine if the javascript is interpreting the multiple emojis from 
                multiple emojis in the text or if it is interpreting the multiple emojis from a single emoji and/or symbols in the text.
                For example, if you use some simple javascript to split the text "emoji 👨🏿‍🦯" into its constituent parts, you get:
                <br></br>
                <ol>
                    {splitText.map(char => {
                        return (
                            <li>{char}</li>
                        )
                    })}
                </ol>
                As you can see, it's simple to isolate the letters. Judging what emoji is being used and where it begins and ends is more challenging.
            </p>
        </div>
    )
}