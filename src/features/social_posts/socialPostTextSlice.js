import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const socialPostTextSlice = createSlice({
    name: 'socialPostText',
    initialState: '',
    reducers: {
        updatePostText: (state, action) => {
            return state = action.payload;
        }
    }
});


export const selectSocialPostText = (state) => state.socialPostText;

export const { updatePostText } = socialPostTextSlice.actions;

export default socialPostTextSlice.reducer;