import { useDispatch } from "react-redux";
import { Button } from "../../components/Inputs";
import { createLayer } from "../../store/track/trackSlice";
import { SavedTrack } from "../../store/track/trackTypes";
import { LayerRow } from "./row";

interface PartContainerProps {
    track: SavedTrack;
}
export const LayerContainer = ({track}: PartContainerProps): JSX.Element => {
    
    const dispatch = useDispatch();

    const layers: JSX.Element[] = [];
    for (const key in track.layers) {
        layers.push(<LayerRow key={key} currentLayerCount={Object.keys(track.layers).length} trackId={track.id} layerId={key} layer={track.layers[key]}/>);
    }

    const openAddNewLayerPanel = (): void => {
        dispatch(createLayer());
    };

    return (
        <div className="w-full min-h-screen">
            <div className="grid grid-cols-1">
                {layers}
            </div>
            <div className="text-center mt-2">
                <Button title="Add Layer" onClick={openAddNewLayerPanel} disabled={false}/>
            </div>
        </div>
    );
}