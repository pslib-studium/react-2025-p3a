import {useState} from "react";

type ControlledInputProps = {
    label: string;
    defaultValue: string;
    onChange: (value: string) => void;
}

const ControlledInput: React.FC<ControlledInputProps> = ({label, defaultValue, onChange}) => {
    const [value, setValue] = useState<string>(defaultValue);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }
    const validate = (value: string) => {
        return value.length > 3;
    }

    return (
        <div>
            <label>{label}</label>
            <input type="text" value={value} onChange={handleChange} />
            <span>{value}</span>
            <span>{validate(value) ? "OK" : "X"}</span>
        </div>
    );
}

export default ControlledInput;