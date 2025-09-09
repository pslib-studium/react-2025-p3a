import {useState} from "react"

type NumberInputProps = {
    value: number;
    valueChange: (x: number) => void;
}

const NumberInput: React.FC<NumberInputProps> = ({value, valueChange}) => {
    //const [val, setVal] = useState<number>(value);
    return (
        <span>
            <input 
                type="number" 
                value={value} 
                onChange={e => {
                    //setVal(Number(e.currentTarget.value));
                    console.log(e.currentTarget);
                    valueChange(Number(e.currentTarget.value));
                }}
            />
            <span>{value}</span>
        </span>
    );
}

export default NumberInput;