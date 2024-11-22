import { createSlice } from '@reduxjs/toolkit';

//const futureThunkIWillWrite = createAsyncThunk();

const lowercaseHashtagsSlice = createSlice({
    name: 'lowercaseHashtags',
    initialState: {
        filteredHashtags: '',
        chatGPTObject: {}
    }, //Not sure how to structure this yet
    reducers: {
        testFunc: (state, action) => {
            state.filteredHashtags = action.payload; //If state is mutated, it needs to be mutated or returned but noot both
        },
        findLowercaseHashtags: (state, action) => {
            const testRegex = /\s/;
            const socialPostText = action.payload;
            const wordsFromSocialPostText = socialPostText.split(/*' ' || '\n'*/testRegex);
            const hashtagsFromSocialPostText = wordsFromSocialPostText.filter(word => {
                if (word.length > 2) {
                    return word[0] === '#';
                } 
            })
            
            const cleanedHashtagsFromSocialPostText = hashtagsFromSocialPostText.filter(word => {//this produces an array with as many elements as are in the mapped array BECAUSE that's what map does. use .filter if you want to create a shorter array
                const lastIndexOfWord = word.length - 1;
                if (word === word.toLowerCase()) {
                    if (word[lastIndexOfWord] === '.' || word[lastIndexOfWord] === '?' || word[lastIndexOfWord] === '!') {
                        return word.slice(0, lastIndexOfWord);
                    } else {
                        return word;
                    }
                }
            })
            
            //alert(cleanedHashtagsFromSocialPostText);
            state.filteredHashtags = cleanedHashtagsFromSocialPostText;
        }
    }
})


export const selectLowercaseHashtags = (state) => state.lowercaseHashtags.filteredHashtags;

export const { findLowercaseHashtags, testFunc } = lowercaseHashtagsSlice.actions;

export default lowercaseHashtagsSlice.reducer;