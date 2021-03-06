import { deepCopy } from "../../../lib/deepClone";
import { RootStateHook } from "../../rootReducer";
import { AppDispatch, AppThunk } from "../../store";
import { TrackDatabase } from "../trackDatabase";
import { fetchTrack, unselectNote, updateTrack } from "../trackSlice";

export const addNoteAsync = (
    soundId: string, 
    layerId: string, 
    trackId: string,
    duration: number
): AppThunk => async (
    dispatch: AppDispatch, 
    getState: RootStateHook
) => {
    const track = deepCopy(fetchTrack(getState, trackId));
    track.layers[layerId].sounds.push({
        id: soundId,
        duration: duration
    });
    await TrackDatabase.updateTrack(track);
    dispatch(updateTrack(track));
};

export const updateNoteAsync = (
    index: number, 
    layerId: string, 
    trackId: string,
    duration: number
): AppThunk => async (
    dispatch: AppDispatch, 
    getState: RootStateHook
) => {
    const track = deepCopy(fetchTrack(getState, trackId));
    const sound = track.layers[layerId].sounds[index];
    sound.duration = duration;
    track.layers[layerId].sounds[index] = sound;
    await TrackDatabase.updateTrack(track);
    dispatch(updateTrack(track));
    dispatch(unselectNote());
};



export const deleteNoteAsync = (
    index: number, 
    layerId: string, 
    trackId: string
): AppThunk => async (
    dispatch: AppDispatch, 
    getState: RootStateHook
) => {
    const track = deepCopy(fetchTrack(getState, trackId));
    track.layers[layerId].sounds.splice(index, 1);
    await TrackDatabase.updateTrack(track);
    dispatch(unselectNote());
    dispatch(updateTrack(track));
};