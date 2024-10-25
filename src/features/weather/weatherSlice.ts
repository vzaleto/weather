import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {fetchWeatherApi} from "../../api/weatherApi.ts";
import {WeatherData} from "../../types/weatherTypes.ts";
import {WHITE} from "../../constants/apiConfig.ts";

const getUserLocation = ():Promise<string>=>{
    return new Promise((resolve)=> {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                console.log('position', position)
                resolve(`${position.coords.latitude},${position.coords.longitude}`)
            }, (error) => {
                console.warn('error', error)
                resolve('Kyiv')
            },
                {
                    timeout: 5000
                })
        } else {
            console.warn('Geolocation is not supported by this browser.')
            resolve('Kyiv')
        }
    })
}

export const fetchWeather = createAsyncThunk(
    "weather/fetchWeather",
    async ({days}: {days: number}) => {
        const location = await getUserLocation()
        console.log('location', location)
        const response = await fetchWeatherApi(location, days)
        return response.data
    }
)

interface WeatherState {
    weather: WeatherData | null
    status: 'idle' | 'loading' | 'succeeded' | 'failed',
    days: number,
    theme:string

}

const initialState:WeatherState = {
    weather: null,
    status: 'idle',
    days: 1,
    theme:WHITE
}

const weatherSlice = createSlice({
    name: "weather",
    initialState,
    reducers: {
        setDays:(state,action)=>{
            state.days = action.payload
        },
        changeTheme:(state,action)=>{
            state.theme = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchWeather.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchWeather.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.weather = action.payload
            })

            .addCase(fetchWeather.rejected, (state) => {
                state.status = 'failed'
            })

    }
})

export const {setDays, changeTheme} = weatherSlice.actions
export default weatherSlice.reducer