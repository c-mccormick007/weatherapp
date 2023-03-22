import { API_KEY, BASE_URL } from "./config";

export async function getWeather(location){
    try{
        const url = `${BASE_URL}/current.json?key=${API_KEY}&q=${location}`
        const response = await fetch(url, {
            method: 'POST',
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({data: 'example'})
          });
        const data = await response.json();
        return data; 
    }catch (err){
        console.error(err);
        throw new Error('Failed fetch of weather.')
    }
}