import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Track } from '../track/track';
import { CreateTrack } from '../track/events';
import { AppThunk, AppDispatch } from './store';

const initialState: Track[] = [];

const trackSlice = createSlice({
    name: 'track',
    initialState,
    reducers: {
        createTrack(state, action: PayloadAction<CreateTrack>) {

        }
    }
});

export const reducer = trackSlice.reducer;

export const createTrack = (): AppThunk => async (dispatch: AppDispatch) => {

};