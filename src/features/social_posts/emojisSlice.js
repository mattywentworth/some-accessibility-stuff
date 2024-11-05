import { createSlice } from '@reduxjs/toolkit';

const emojisSlice = createSlice({
    name: 'emojis',
    initialState: {
        //test: ['test', 'test'],
        consecutiveEmojis: false,
        emojisWithinASentence: false
    },
    reducers: {
        checkConsecutiveEmojis: (state, action) => {
            const postString = action.payload;
            //alert(postString);
            const arrayOfStringChars = [...postString];
            //const arrayFilteredForEmojis = arrayOfStringChars.filter()
            const arrayOfEmojisAndIndices = [];
            arrayOfStringChars.map((element, index) => {
                const elementCodePoint = element.codePointAt(0);
                if (elementCodePoint > 255) {
                    if (elementCodePoint !== undefined) {//can this be included as an && in the if statement on the prior line?
                        arrayOfEmojisAndIndices.push({
                            index: index,
                            char: element
                        })
                    }
                } else { //is this necessary?
                    return;
                }
            });
            const isThereAStringOfEmojis = arrayOfEmojisAndIndices.some((emojiObj, i) => {
                if (arrayOfEmojisAndIndices[i + 1] !== undefined) {
                    return emojiObj.index + 1 === arrayOfEmojisAndIndices[i + 1].index;
                }
            });
            if (isThereAStringOfEmojis) {
                state.consecutiveEmojis = true;
            } else {
                state.consecutiveEmojis = false;
            }
            //return isThereAStringOfEmojis ? state.consecutiveEmojis = true : state.consecutiveEmojis = false;
            //return state.consecutiveEmojis;
        },
        checkEmojiPlacementInSentences: (state, action) => {
            const postString = action.payload;
            const arrayOfSentenceLetterArrays = [];
            const regex = /(\?|\.|\!)/
            const sentencesArrayCluttered = postString.split(regex);
            const sentencesArrayCleaned = sentencesArrayCluttered.filter(element => element.length > 1);
            const emojiIsWithinASentence = sentencesArrayCleaned.some(sentence => {
                const arrayOfSentenceChars = [...sentence];
                const emojiExists = arrayOfSentenceChars.some(char => {
                    return char.codePointAt(0) > 255 && char.codePointAt(0) !== undefined;
                });
                const arrayOfTruthys = [];//Should improve the code below by checking if the end of the sentence is a string of emojis,
                //in which case it would already be caught by the other dispatched action.
                if (emojiExists === true) {
                    for (let i = 0; i < arrayOfSentenceChars.length - 2; i++) {
                        if (arrayOfSentenceChars[i].codePointAt(0) > 255 && arrayOfSentenceChars[i].codePointAt(0) !== undefined) {
                            arrayOfTruthys.push(true);
                        }
                    }
                }
                if (arrayOfTruthys.length >= 1) {
                    return state.emojisWithinASentence = true;
                } else {
                    return state.emojisWithinASentence = false;
                }
            });
            //return emojiIsWithinASentence ? state.emojisWithinASentence = true : state.emojisWithinASentence = false;
            //return state.emojisWithinASentence;
        }
    }
});

export const selectConsecutiveEmojis = (state) => {
    return state.emojis.consecutiveEmojis;
};

export const selectEmojisWithinASentence = (state) => state.emojis.emojisWithinASentence;

export const { checkConsecutiveEmojis, checkEmojiPlacementInSentences } = emojisSlice.actions;

export default emojisSlice.reducer;


//message: 'Emojis are a useful communication tool. But using multiple emojis in a row can make it difficult for people with low vision to understand the content of your post. Please consider reducing your use of emojis in order to make your post more accessible for all of our users.\n\n https://www.youtube.com/watch?v=0XJBIUH_o4w'
