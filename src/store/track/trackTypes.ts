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

interface Control {
    panner: number;
    volume: number;
    looping: boolean;
}

export type Layer = LayerPart[];
interface LayerMap {
    [id: string]: Layer;
}

export interface LayerPart {
    id: string;
}