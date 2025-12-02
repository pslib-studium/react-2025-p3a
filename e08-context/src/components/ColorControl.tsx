import React, {useContext} from 'react';
import { StyleContext } from '../providers/StyleProvider';
import { type Color, colors } from '../types/style';
import { useStyle } from '../hooks/useStyle';

const ColorControl: React.FC = () => {
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setColor(event.target.value as Color);
    };
    //const { setColor } = useContext(StyleContext)!;
    const { setColor } = useStyle()!;
    return (
        <>
            <div>Color Control Component</div>
            <select onChange={handleChange}>
                {colors.map((color) => (
                    <option key={color} value={color}>
                        {color.toUpperCase()}
                    </option>
                ))}
            </select>
        </>
    );
}
/*
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="green">Green</option>
*/
export default ColorControl;