import {useState, useId} from "react";

type ControlledInputProps = {
    label: string;
    defaultValue: string;
    onChange: (value: string) => void;
}

const ControlledInput: React.FC<ControlledInputProps> = ({label, defaultValue, onChange}) => {
    const [value, setValue] = useState<string>(defaultValue);
    const id = useId(); // unikátní id prvku
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }
    const validate = (value: string) => {
        return value.length > 3;
    }

    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input id={id} type="text" value={value} onChange={handleChange} />
            <span>{value}</span>
            <span>{validate(value) ? "OK" : "X"}</span>
            <button onClick={() => {onChange(value)}}>Odeslat</button>
            <span>{id}</span>
        </div>
    );
}

export default ControlledInput;