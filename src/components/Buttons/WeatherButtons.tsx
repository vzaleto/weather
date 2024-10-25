import WeatherSwapBtn from "./WeatherSwapBtn.tsx";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../store/store.ts";
import {setDays} from "../../features/weather/weatherSlice.ts";

const WeatherButtons = () => {
    const buttons = [
        {label: 'Today', days: 1},
        {label: '3 day', days: 3},
        {label: '7 day', days: 7},
        {label: '14 day', days: 14},

    ]

    const {days} = useSelector((state: RootState) => state.weather)

    const dispatch:AppDispatch = useDispatch()

    const handleChange = (days:number)=>{
        dispatch(setDays(days))
    }
    return (
        <div className="flex space-x-2 justify-center my-4">
            {buttons.map((btn) => (
                <WeatherSwapBtn key={btn.label} label={btn.label} days={btn.days} onClick={()=>handleChange(btn.days)} isActive={days===btn.days} />
            ))}
        </div>
    );
};

export default WeatherButtons;