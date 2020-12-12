import { useSelector } from "react-redux";
import { trackSelector } from "../store/trackSlice";
import { welcomeSelector } from "../store/welcomeSlice";
import { ControlPanel } from "./controls/panel";
import { SoundsPanel } from "./sounds/panel";
import { Welcome } from './Welcome';
import { Begin } from './Begin';
import { Title } from "./Title";
import { LayerContainer } from './layers/container';
import { SavedTrack } from "../track/track";
import { DragDropContext } from "react-beautiful-dnd";

export const Main = (): JSX.Element => {

    const hasUsedWelcomeMessage = useSelector(welcomeSelector);
    const trackState = useSelector(trackSelector);

    /**
     * If the user has never accessed the system, 
     * show them the welcome message
     */
    if (!hasUsedWelcomeMessage){
        return (<Welcome/>);
    }

    /**
     * If the current track id is zero then now track is selected
     * Show the create new / load existing track buttons
     */
    if (trackState.currentTrackId.length === 0) {
        return (<Begin/>);
    }

    const track: SavedTrack = trackState.tracks[trackState.currentTrackId];

    if (track === null) {
        return (<Begin/>);
    }

    const handleDragDrop = () => {
        console.log('called');
    };

    return (
        <DragDropContext onDragEnd={handleDragDrop}>
            <div id="main-panel" className="container mx-auto flex flex-wrap overflow-hidden">
                <div className="w-full">
                    <Title title={track.name}/>
                </div>
                <SoundsPanel/>
                <ControlPanel id={trackState.currentTrackId} track={track}/>
                <LayerContainer track={track}/>
            </div>
        </DragDropContext>
    );
}