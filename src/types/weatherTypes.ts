export interface WeatherTypes{
    text:string,
    icon:string,
}
export interface CurrentWeather{
    temp_c:number,
    condition: WeatherTypes,
    wind_mph:number,
    precip_mm:number,
    pressure_mb:number,
}

export interface WeatherLocation{
    name:string,
    region:string,
    country:string
}

export interface DayForecast {
    avgtemp_c: number;
    condition: WeatherTypes;
}

export interface ForecastDay {
    date: string;
    day: DayForecast;

}
export interface Forecast {
    forecastday: ForecastDay[];
}

export interface WeatherData{
    location:WeatherLocation,
    current:CurrentWeather,
    forecast:Forecast
}

export interface WeatherCardProps {
    temp:number
    icon:string
    text:string,
    wind:number,
    precip:number,
    pressure:number,
    name:string,
    region:string,
    country:string
}

export interface HeaderProps{
    theme:string
}