import axios from "axios";
import {API_KEY, BASE_URL} from "../constants/apiConfig.ts";

const weatherApi = axios.create({
    baseURL: BASE_URL,
    params:{
        key: API_KEY,
    }
})

export const fetchWeatherApi = (location:string, days:number)=>{
    return weatherApi.get('/forecast.json', {
        params:{
            q:location,
            days:days,

        }
    })
}

export default weatherApi