import { configureStore } from '@reduxjs/toolkit';
import socialPostTextReducer from './features/social_posts/socialPostTextSlice';
import emojiUsageReducer from './features/social_posts/emojisSlice';
import acknowledgementReducer from './features/social_posts/acknowledgementSlice';
import lowercaseHashtagReducer from './features/social_posts_hashtags/lowercaseHashtagsSlice';

export default configureStore({
    reducer: {
        socialPostText: socialPostTextReducer,
        emojis: emojiUsageReducer,
        acknowledgement: acknowledgementReducer,
        lowercaseHashtags: lowercaseHashtagReducer
    }
});