export interface SavedTrackMap {
    [id: string]: SavedTrack;
}

export interface SavedTrack {
    id: string;
    name: string;
    date: string;
    layers: LayerMap;
    control: Control;
}

export enum NOTE_TYPE {
    NOTE,
    DRUM
}

interface Control {
    panner: number;
    volume: number;
    looping: boolean;
}

interface LayerMap {
    [id: string]: Layer;
}

export interface Layer {
    [id: string]: LayerPart;
}

export interface LayerPart {
    note: string;
    type: NOTE_TYPE;
}