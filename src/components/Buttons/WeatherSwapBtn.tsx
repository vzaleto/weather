import {FC} from "react";

interface WeatherSwapBtnProps {
    label: string,
    days: number,
    isActive: boolean,
    onClick: () => void
}

const WeatherSwapBtn:FC<WeatherSwapBtnProps> = ({label, isActive, onClick}) => {
    return (
        <button className={`px-4 py-2 rounded-md transition-colors duration-300 ${isActive ? 'bg-blue-600 ' : 'bg-gray-800 text-gray-400'} `} onClick={onClick}>
            {label}
        </button>
    );
};

export default WeatherSwapBtn;