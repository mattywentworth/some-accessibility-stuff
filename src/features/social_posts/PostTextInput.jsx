import React, { useState } from 'react';
import styles from './PostTextInput.module.css';
import { updatePostText, selectSocialPostText } from './socialPostTextSlice';
import { useSelector, useDispatch } from 'react-redux'; //?
import { checkConsecutiveEmojis, checkEmojiPlacementInSentences } from './emojisSlice';


export const PostTextInput = () => {

    const dispatch = useDispatch();
    const socialPostText = useSelector(selectSocialPostText);
    //const [postText, setPostText] = useState('');
    const handleChange = (e) => {
        const postTextValue = e.target.value;
        dispatch(updatePostText(postTextValue));
        dispatch(checkConsecutiveEmojis(postTextValue));
        dispatch(checkEmojiPlacementInSentences(postTextValue));
    }

    const regExpEmoji = /(\p{Emoji_Presentation}|\p{Extended_Pictographic})/gu;
    const string = '🗿🗽🗽Holy crap here is an emoji 🗿 and another one 🗽🏰🏕️🛖🚅🚜🦁🐱☺️😚😝'
    const test = string.replace(regExpEmoji, 'emoji');
    const array = [...string.matchAll(regExpEmoji)];

    const arrayTwo = [...string];
    const firstEmoji = arrayTwo[0];
    let testOne;
    if (regExpEmoji.test(firstEmoji) === true) {
        testOne = 'true';
    } else {
        testOne = 'false';
    }
    const secondEmoji = arrayTwo[1];
    let testTwo;
    if (regExpEmoji.test(secondEmoji) === true) {
        testTwo = 'true';
    } else {
        testTwo = 'false';
    }
    const thirdEmoji = arrayTwo[2];
    let testThree;
    if (regExpEmoji.test(thirdEmoji) === true) {
        testThree = 'true';
    } else {
        testThree = 'false';
    }
    const firstLetter = arrayTwo[3];
    let testFour;
    if (regExpEmoji.test(firstLetter) === true) {
        testFour = 'true';
    } else {
        testFour = 'false';
    }

    const translateOne = '\u1285111';
    const translateTwo = '\u{12111}'

    //iterate over the array and find all instances where two or more emojis show in a row. isolate these strings of emojis
    //slash indices, create an array with each of the strings of indices, and use the array to display all the errors
    const emojiIndexFunc = () => {
        let arrayOfIndices = [];
        arrayTwo.forEach((stringChar, index) => {
            if (regExpEmoji.test(stringChar) === true) {
                //arrayOfIndices.push(index);
                arrayOfIndices.push(stringChar);
            }
        });
        //alert(arrayOfIndices)
        /*const indicesAsString = arrayOfIndices.join().toString();
        return indicesAsString;*/
    }

    const testString = emojiIndexFunc();

    //use a func that looks at each index and 'index + index+1', asks if either is an emoji, if so, pushes the corresponding
    //index into an array. if the 'index + index+1' was the emoji, use an algorithm to calculate a value to determine when
    //consecuutive indices comprise an emoji. For example, if index 0 is an emoji and index 1+index 2 is an emoji...
    //we would count that as index 0 and index 1 being emojis and consecutive.
    const stringExample = '🗽🏰xy🏕️🛖🚅xy🚜🦁🐱☺️abc';
    const stringExampleTwo = 'xyzabc';
    const stringExampleThree = 'Silly example of a possible post that #includes hashtags. Sometimes they\'re in the body and sometimes #at the end. #likethis #andlikethisone'
    //index0 = 🗿, index1 and index 2 =🗽, index3 and index4 =🗽.
    //of index0 and index0+index1, index0 is an emoji.
    //of index1 and index1+index2, index1+index2 is an emoji.
    //of index2 and index2+index3, neither is an emoji.
    //of index3 and index3+index4, index3+index4 is an emoji.
    //so if you get 2 neithers in a row, that represents a definitive break in the string of emojis.
    //so can you log a letter 'X' for each non-emoji. for each single index emoji, log the index. for each multi-index emoji,
    //log the two indices concatenated(?). so for stringExmaple above, the array would look like:
    //[0, 12, n, 34, l, l] **Haven't finished plotting this out yet, not sure if it's smart**
    //OR
    //iterate through each index of the arrayed string. starting at index 0, use the regex to find out if it's an emoji. if yes, 
    //push that index into an empty array by creating anew array...
    //so if index 0 is an emoji, the array would start out as [] and immediately become [[0]]. Then iterate over every other index
    //with the following process: if (array element is emoji) {push that array index value into the existing array element}, so if 
    //index 1 were an emoji, the array would become [[0, 1]]. If index 2 is not an emoji, the array becomes...
    //[[0, 1], 2]. If index 3 and 4 are emojis, the array becomes [[0, 1], 2, [3, 4]] and so on.
    //then the array can be iterated over, looking for all elements with length > 1, pushing those into a new array of all strings
    //of more than 1 emoji in a row, which can then be populated into a violation message that shows said emoji strings by iterating
    //over the array and slicing(?) the original array of characters by each starting and ending index value in the generated array.

    const handleChangeTest = (testString) => {
        const arrayedTestString = [...testString];
        /*console.log(stringExample.codePointAt(0));
        console.log(stringExample.codePointAt(1));
        console.log(stringExample.codePointAt(2));
        console.log(stringExample.codePointAt(3));
        console.log(stringExample.codePointAt(4));
        console.log(stringExample.codePointAt(5));
        console.log(stringExample.codePointAt(6));
        console.log(stringExample.codePointAt(7));*/
        const filteredArrayedTestString = arrayedTestString.filter(char => char.codePointAt(0) > 5000);
        console.log(filteredArrayedTestString);
        console.log(arrayedTestString);
        let arrayOfEmojiIndices = [];
        arrayedTestString.map((element, index) => {
            const elementCodePoint = element.codePointAt(0);
            //let currentIndexOfArrayOfEmojiIndices = 0;
            //Need to define 'someEmojiRegEx' below:
            if (elementCodePoint > 255) {
                if (elementCodePoint !== undefined) {
                    arrayOfEmojiIndices.push({
                        index: index,
                        char: element
                    });
                }
            } else {
                return;
            }
        });
        console.log(arrayOfEmojiIndices);
        const isThereAStringOfEmojis = arrayOfEmojiIndices.some((emojiObj, i) => {
            if (arrayOfEmojiIndices[i + 1] !== undefined) {
                return emojiObj.index + 1 === arrayOfEmojiIndices[i + 1].index;
            }
        });


        console.log(isThereAStringOfEmojis);
        {/*
        let counter = 0;
        let sequenceArrayCounter = 0;
        //let sequenceObjKey = 0
        const arrayOfSequences = [[]];
        arrayOfEmojiIndices.map(objElement => {
            if (arrayOfEmojiIndices[counter + 1].index === objElement.index + 1) {
                arrayOfSequences[sequenceArrayCounter].push(objElement.char);
                counter += 1;
                //console.log(counter);
            } else if (arrayOfEmojiIndices[counter + 1].index !== objElement.index + 1 && arrayOfEmojiIndices[counter - 1].index === objElement.index - 1) {
                arrayOfSequences[sequenceArrayCounter].push(objElement.char);
                counter += 1;
                arrayOfSequences.push([]);
                sequenceArrayCounter += 1;
            } else {
                arrayOfSequences.push('huh');
            }
        })
        console.log(arrayOfSequences);
        console.log('previous');
        */}


        //console.log(arrayedTestString);
        console.log(arrayOfEmojiIndices);
        console.log(arrayOfEmojiIndices[1]);

    }
    handleChangeTest(stringExampleTwo);

    const handleHashtagExtraction = (string) => {
        //const arrayofChars = [...string];
        const arrayOfWords = string.split(' ');
        const hashtagsInArray = arrayOfWords.filter(word => word.startsWith('#') === true);
        console.log(hashtagsInArray);
        return hashtagsInArray;
    }

    //handleHashtagExtraction(stringExampleThree);
    //How to handle: onchange, keep track of how many # chars there are, and every time that value changes and at least three chars
    //are next to it, run the api call again.

    const handleAPICallsInexpensively = (textInputStateValue) => {
        const arrayOfWords = string.split(' ');
        const hashtagsInArray = arrayOfWords.filter(word => word.startsWith('#') === true);
        const testHashtagCounter = hashtagsInArray.length;
        let timerCounter = 0;
        const timeoutTime = 3000;
        if (testHashtagCounter === 1) {
            const timeout = setTimeout(alert('I think you finished typing your first hashtag.'), timeoutTime);
            clearTimeout(timeout); 
            //Execute API call here - only happens when there is a pause in typing if you make this a keyup listener           
        } else if (testHashtagCounter === 2 ) {
            const timeout = setTimeout(alert('I think you finished typing your second hashtag.'), timeoutTime);
            cleartTimeout(timeout);
        }
        //is this an ideal time for useEffect? Bc I want to only run the func when a value changes.
        //create a global variable that starts a timer everytime there is a keyup. if # word counter changes && timer exceeds X, send the api call
    }


    let arrayOfIndices = [];
    arrayTwo.forEach((charAtIndex, index) => {
        if (regExpEmoji.test(charAtIndex) === true) {
            arrayOfIndices.push(index);
        }
        
    });


    return (
        <>
            <textarea value={socialPostText} onChange={handleChange} className={styles.input} placeholder='What&#39;s on your mind?'></textarea>
            <p>{string.codePointAt(0)}+{string.codePointAt(1)}+{string.codePointAt(2)}+{string.codePointAt(3)}</p>
            <p>{test}</p>
            <p>{array}</p>
            <p>{firstEmoji}</p>
            <p>{testOne}</p>
            <p>{firstEmoji.codePointAt(0)}</p>
            <p>{translateOne}{translateTwo}</p>
            <p>{secondEmoji}</p>
            <p>{testTwo}</p> {/* This is failing the test, but if you convert it to its codepoint (next line) first, it registers as the approopriate code. Sp regex meeds to be on the converted code? */}
            <p>{secondEmoji.codePointAt(0)}</p>
            <p>{String.fromCodePoint(secondEmoji.codePointAt(0))}</p>
            <p>{thirdEmoji}</p>
            <p>{testThree}</p>
            <p>{thirdEmoji.codePointAt(0)}</p>
            <p>{String.fromCodePoint(thirdEmoji.codePointAt(0))}</p>
            <p>{firstLetter}</p>
            <p>{testFour}</p>
            <p>{firstLetter.codePointAt(0)}</p>
            <p>{arrayTwo.map(charAtIndex => {
                return charAtIndex;
            })}</p>
            <p>{arrayTwo[0]}{arrayTwo[1]}</p>
            <p>{testString}</p>
        </>
    )
}