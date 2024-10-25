import { useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../store/store.ts";
import { fetchWeather} from "../features/weather/weatherSlice.ts";
import WeatherCard from "../components/WeatherCard.tsx";
import WeatherButtons from "../components/Buttons/WeatherButtons.tsx";

import Header from "../components/Header.tsx";
import {WHITE} from "../constants/apiConfig.ts";

const Home = () => {
    const {weather, status, days, theme} = useSelector((state: RootState) => state.weather)
    const dispatch: AppDispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchWeather({days}))
    }, [dispatch, days]);

    const forecast = weather ? weather.forecast.forecastday.slice(0, days) : [];

console.log(theme)

    return (
        <div className={`h-dvh ${theme === WHITE ?  'bg-white text-green-300' : 'bg-black text-white ' }`} >

            <div className={`container   `}>
                <Header theme={theme} />
                <WeatherButtons/>
                {status === 'loading' && <p>Loading...</p>}
                {status === 'failed' && <p>Error</p>}
                {weather && (
                    <WeatherCard temp={weather.current.temp_c} text={weather.current.condition.text}
                                 icon={`https:${weather.current.condition.icon}`}
                                 wind={weather.current.wind_mph}
                                 precip={weather.current.precip_mm}
                                 pressure={weather.current.pressure_mb}
                                 name={weather.location.name}
                                 region={weather.location.region}
                                 country={weather.location.country}
                                 forecast={forecast}
                                 theme={theme}
                                    />
                )}

            </div>
        </div>
    );
};

export default Home;