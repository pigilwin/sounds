import { MouseEventHandler } from "react";
import { BasicTextErrorMessage } from "./ErrorMessages";
interface InputProps {
    title: string;
    error: string;
}

interface RangeInputProps extends InputProps {
    min: number;
    max: number;
    step: number;
    value: number;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
}
export const RangeInput = ({title, error, min, max, step, value, onChange}: RangeInputProps): JSX.Element => {
    return (
        <div className="range-slider flex flex-col">
            <label className="text-xl mb-2">{title}</label>
            <input 
                onChange={onChange} 
                type="range" 
                className="cursor-pointer dark:text-black" 
                min={min} 
                max={max} 
                value={value} 
                step={step}
            />
            <BasicTextErrorMessage message={error}/>
        </div>
    );
}

interface ToggleSwitchProps extends InputProps {
    value: boolean;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
}
export const ToggleSwitch = ({title, onChange, value}: ToggleSwitchProps): JSX.Element => {
    return (
        <div className="flex flex-col">  
            <div className="ml-3 text-xl">{title}</div>
            <div className="toggle-switch flex flex-col p-4">
                <label className="flex items-center cursor-pointer">
                    <div className="relative mx-auto">
                        <input onChange={onChange} checked={value} type="checkbox" className="hidden" />
                        <div className="toggle__line w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
                        <div className="toggle__dot absolute w-6 h-6 bg-white rounded-full shadow inset-y-0 left-0"></div>
                    </div>
                </label>
            </div>
        </div>
    );
}


interface TextSingleLineInputProps extends InputProps {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
}
export const TextSingleLineInput = ({error, onChange, title, value}: TextSingleLineInputProps): JSX.Element => {
    
    const classNames = (): string => {
        const classes: string[] = ["border-2", "p-2", "w-full", "rounded", "dark:text-black"];
        if (error.length > 0) {
            classes.push('border-red-400', 'bg-red-200');
        }
        return classes.join(" ");
    };

    return (
        <div className="flex">
            <span className="text-sm p-2 text-center whitespace-no-wrap mr-1">{title}</span>
            <input className={classNames()} type="text" onChange={onChange} value={value}/>
        </div>
    );
}

interface NumberSingleLineInputProps extends InputProps {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
}
export const NumberSingleLineInput = ({title, error, onChange, value}: NumberSingleLineInputProps): JSX.Element => {
    const classNames = (): string => {
        const classes: string[] = ["border","py-2","px-3","text-grey-darkest", "rounded", "dark:text-black"];
        if (error.length > 0) {
            classes.push('border-red-400', 'bg-red-200');
        }
        return classes.join(" ");
    };
    
    return (
        <div className="flex flex-col mb-4">
            <label className="mb-2 font-bold text-lg text-grey-darkest">{title}</label>
            <input onChange={onChange} className={classNames()} type="number" value={value}/>
            <BasicTextErrorMessage message={error}/>
        </div>
    );
}

interface ButtonProps {
    title: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
    disabled: boolean;
    additionalClasses?: string[];
}

const defaultClasses: string[] = [
    'p-4',
    'transition-colors',
    'duration-150',
    'rounded-lg',
    'disabled:opacity-50',
    'border-2',
    'dark:text-white',
    'hover:text-white'
];

export const Button = ({onClick, disabled, title, additionalClasses}: ButtonProps): JSX.Element => {
    const classes = Array.from(defaultClasses);
    classes.push('border-indigo-700');
    classes.push('hover:bg-indigo-700');

    if (additionalClasses !== undefined) {
        for(const className of additionalClasses){
            classes.push(className);
        }
    }

    return (
        <button onClick={onClick} disabled={disabled} className={classes.join(' ')}>{title}</button>
    );
}

export const DeleteButton = ({onClick, title, disabled}: ButtonProps): JSX.Element => {
    const classes = Array.from(defaultClasses);
    classes.push('border-red-500');
    classes.push('hover:bg-red-500');
    return (
        <button onClick={onClick} disabled={disabled} className={classes.join(' ')}>{title}</button>
    );
}