export function updateLocation(location) {
    const locationElement = document.querySelector('#location') ;
    locationElement.innerText = location;
}

export function updateCondition(condition) {
    const conditionElement = document.querySelector("#condition");
    conditionElement.innerText = condition;
}

export function updateTempF(temp){
    const tempElement = document.querySelector('#temp');
    temp = `${temp}° F`;
    tempElement.innerText = temp;
}

export function updateIcon(icon){
    const iconElement = document.querySelector('#icon') ;
    iconElement.src = icon;
}

export function updateWind(wind){
    const windElement = document.querySelector('#wind');
    windElement.innerText = wind;
}

export function updateHumidity(humidity){
    const humidElement = document.querySelector('#humidity');
    humidElement.innerText = humidity;
}