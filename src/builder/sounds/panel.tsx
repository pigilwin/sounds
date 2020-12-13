import { Droppable } from 'react-beautiful-dnd';
import { Grid } from "../../components/Grid";
import { Panel, PanelTitle } from "../../components/Panel";
import { getSoundsForDisplay, SoundForDisplay } from "./sounds";
import { Part } from '../layers/part';

export const SoundsPanel = (): JSX.Element => {
    
    const buttons = buildSoundButtons();

    return (
        <Panel>
            <PanelTitle title="Sounds"/>
            <Droppable isDropDisabled={true} droppableId="sounds-droppable">
                {(provided, snapshot) => (
                    <div ref={provided.innerRef}>
                        <Grid elements={buttons}/>
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </Panel>
    );
}

const buildSoundButtons = (): JSX.Element[] => {
    const elements: JSX.Element[] = [];
    const sounds: SoundForDisplay = getSoundsForDisplay();
    let index: number = 0;
    for (const key in sounds) {
        elements.push(<Part onLayer={false} key={key} id={key} sound={sounds[key]} index={index}/>);
        index++;
    }
    return elements;
}