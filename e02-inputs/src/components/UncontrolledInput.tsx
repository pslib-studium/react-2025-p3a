import {useRef, useId} from "react"

type UncontrolledInputProps = {
    label: string;
    defaultValue: string;
    onChange: (value: string | undefined) => void;
}

const UncontrolledInput: React.FC<UncontrolledInputProps> = ({label, defaultValue, onChange}) => {
    const id = useId();
    const inputRef = useRef<HTMLInputElement>(null);
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input id={id} type="text" defaultValue={defaultValue} ref={inputRef} />
            <button onClick={() => {
                console.log(inputRef.current);
                onChange(inputRef.current?.value);
                }}>Odeslat</button>
            <span>{id}</span>
        </div>
    );
}

export default UncontrolledInput;