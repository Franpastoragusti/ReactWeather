import Axios from 'axios';

const API_KEY = 'a0dbc46dc00e752867d9b78917cb6013';


const FETCH_WEATHER = 'FETCH_WEATER';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export function fetchWeather(city){
    const url = `${ROOT_URL}&q=${city},us`;

    const request = Axios.get(url);


    return{
        type: FETCH_WEATHER,
        payload: request
    }
}