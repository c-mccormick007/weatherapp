import _ from 'lodash';
import './style.css';
import { getWeather } from './weather';
import { updateLocation, updateIcon, updateCondition, updateTempF, updateWind, updateHumidity} from './ui';

const formSubmit = document.querySelector('#submit-button');
const conditionBox = document.querySelector('#conditionbox');
const loading = document.querySelector('#loading');

formSubmit.addEventListener('click', async (event) => {
    event.preventDefault();
    const locationInput = document.querySelector('#location-input');
    const location = locationInput.value;
    const container = document.querySelector('.container');
    loading.style.display = 'block';
    container.style.display = 'block';
    conditionBox.style.display = 'none';

    try {
        const weatherData = await getWeather(location);
        console.log(weatherData)
        loading.style.display = 'none';
        conditionBox.style.display = 'block';
        container.style.display = 'none';
        updateCondition(weatherData.current.condition.text)
        updateWind(weatherData.current.wind_mph + " MPH " + weatherData.current.wind_dir)
        updateHumidity("Humidity:" + weatherData.current.humidity + "%")
        updateIcon(weatherData.current.condition.icon);
        updateTempF(weatherData.current.temp_f);
        updateLocation(weatherData.location.name + ", " + weatherData.location.region)
    } catch (err){
        window.alert("Location not found.")
        loading.style.display = 'none';
        conditionBox.style.display = 'none';
        container.style.display = 'none';
        updateLocation("");
        console.error(err);
    }
})  