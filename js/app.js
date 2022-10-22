// Do not show API key on your js file
const API_KEY = `b2a3fcc5eead4ac5e6314c313015a3d7`;

const loadTemperature = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemperature(data));
}
const displayTemperature = data => {
    const temperature = document.getElementById('temperature');=
    temperature.innerText = data.main.temp
}

document.getElementById('btn-search').addEventListener('click', function(){
    const searchField = document.getElementById('search-field');
    const city = searchField.value;
    loadTemperature(city);
})


loadTemperature('feni');