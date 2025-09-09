type ResultDisplayProps = {
    v1: number;
    v2: number
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({v1, v2}) => {
    let sum = v1 + v2;
    return (
        <span>{sum}</span>
    );
}

export default ResultDisplay;