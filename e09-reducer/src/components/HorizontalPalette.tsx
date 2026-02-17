import React from 'react';
import { useStyleContext } from '../providers/StyleProvider';
import ColorSquare from './ColorSquare';
import styles from './HorizontalPalette.module.css';

const HorizontalPalette: React.FC = () => {
    const [{ palette, color }] = useStyleContext();
    return (
        <div className={styles["horizontal-palette"]}>
            {palette && palette.map((bg, index) => (
                <ColorSquare key={index} color={color} background={bg} />
            ))}
        </div>
    );
}

export default HorizontalPalette;