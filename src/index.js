import _ from 'lodash';
import './style.css';
import { getWeather } from './weather';
import { updateLocation, updateIcon, updateCondition, updateTempF} from './ui';

const formElement = document.querySelector('#formholder');
formElement.addEventListener('click', async (event) => {
    event.preventDefault();
    const locationInput = document.querySelector('#location-input');
    const location = locationInput.value;
    try {
        const weatherData = await getWeather(location);
        console.log(weatherData)
        updateCondition(weatherData.current.condition.text)
        updateIcon(weatherData.current.condition.icon);
        updateTempF(weatherData.current.temp_f);
        updateLocation(weatherData.location.name + ", " + weatherData.location.region)
    } catch (err){
        console.error(err);
    }
})  