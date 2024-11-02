import { configureStore } from '@reduxjs/toolkit';
import socialPostTextReducer from './features/social_posts/socialPostTextSlice';

export default configureStore({
    reducer: {
        socialPostText: socialPostTextReducer
    }
});