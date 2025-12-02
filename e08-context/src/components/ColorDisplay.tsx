import React, {useContext} from 'react';
import { StyleContext } from '../providers/StyleProvider';

const ColorDisplay: React.FC = () => {
    const { color } = useContext(StyleContext)!;
    return (
        <>
        <div>Color Display Component</div>
        <div style={{ color }}>
            The current color is: {color}
        </div>
        </>
    );
}

export default ColorDisplay;