import {ForecastDay, WeatherCardProps} from "../types/weatherTypes.ts";
import {FC} from "react";
import {WHITE} from "../constants/apiConfig.ts";

interface WeatherCardPropsForecast extends WeatherCardProps {
    forecast: ForecastDay[],
    theme:string
}


const WeatherCard: FC<WeatherCardPropsForecast> = ({
                                                       temp,
                                                       icon,
                                                       text,
                                                       wind,
                                                       precip,
                                                       pressure,
                                                       name,
                                                       region,
                                                       country,
                                                       forecast,
                                                        theme
                                                   }) => {
    return (
        <div
            className={`bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700  rounded-md p-6 max-w-lg mx-auto shadow-2xl ${ theme === WHITE ? 'shadow-black' : 'shadow-white' }  `}>

            <div className={'flex justify-between items-center'}>
                <div className={'flex items-center space-x-4'}>
                    <img className={'w-24 h-24'} src={icon} alt={text}/>
                    <div>
                        <h2 className={"text-3x1 font-semibold"}>{name}, {country}</h2>
                        <h3 className={"text-lg "}> {region} </h3>
                        <p className={"text-x1 mt-2"}>{text}</p>
                    </div>
                </div>
                <div className={'text-right'}>
                    <h1 className={'text-6xl font-bold'}>{temp} <span className={'text-3xl'}>°C</span></h1>
                    <div className={'mt-4 space-y-1'}>
                        <p>Wind: {wind} km/h</p>
                        <p>Precipitation: {precip} mm</p>
                        <p>Pressure: {pressure} hPa</p>
                    </div>
                </div>
            </div>
            <div className={'mt-8 border-t border-gray-400 pt-4'}>
                {/*<h4 className={'text-xl font-semibold mb-2'}></h4>*/}
                <div className={'flex justify-center flex-wrap gap-7'}>
                    {forecast.map((day, index) => (
                        <div className={"text-center"} key={index}>
                            <h5 className={"text-sm"}>{new Date(day.date).toLocaleDateString('en-US', {weekday: 'short'})}</h5>
                            <img className={"w-10 h-10 mx-auto"} src={`https:${day.day.condition.icon}`}
                                 alt={day.day.condition.text}/>
                            <p className={"text-sm"}>{day.day.avgtemp_c}°C</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WeatherCard;