import { createSlice } from '@reduxjs/toolkit';

const acknowledgementSlice = createSlice({
    name: 'acknowledgement',
    initialState: {
        acknowledgementNeeded: false,
        acknowledgementClicked: false
    },
    reducers: {
        toggleAcknowledgementNeeded: (state, action) => {
            /*if (state.acknowledgementNeeded) {
                return state.acknowledgementNeeded === false;
            } else {
                return state.acknowledgementNeeded === true;
            }*/
           state.acknowledgementNeeded = action.payload;
        },
        toggleAcknowledgementClicked: (state, action) => {
            /*if (!state.acknowledgementClicked) {
                return state.acknowledgementClicked === true;
            }*/
           state.acknowledgementClicked = action.payload;
        }
    }
})


export const selectAcknowledgementNeeded = (state) => state.acknowledgement.acknowledgementNeeded;

export const selectAcknowledgementClicked = (state) => state.acknowledgement.acknowledgementClicked;

export const { toggleAcknowledgementNeeded, toggleAcknowledgementClicked } = acknowledgementSlice.actions;

export default acknowledgementSlice.reducer;