const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');
const forecast = new Forecast();


const updateUi =(data)=>{
// const cityDets = data.cityDets;
// const weather = data.weather;
const{cityDets,weather}=data;

details.innerHTML=`
<h5 class="my-3">${cityDets.EnglishName}</h5>
        <div class="my-3">${weather.WeatherText}</div>
        <div class="display-4 my-4">
            <span>${weather.Temperature.Metric.Value}</span>
            <span>&deg;</span>
        </div>
        `;

//day-night cards
let timesrc = null;
if(weather.IsDayTime){
    timesrc = 'img/day.svg';
}else{
    timesrc = 'img/night.svg';
}
time.setAttribute('src',timesrc);

//icon image
const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
icon.setAttribute('src',iconSrc);

        //remove d-none class if present
        if(card.classList.contains('d-none')){
            card.classList.remove('d-none');
        }
}


// const updateCity = async(city)=>{
// const cityDets = await getCity(city);
// const weather = await getWeather(cityDets.Key);
// return {cityDets,weather};
// }


cityForm.addEventListener('submit',e=>{
e.preventDefault();
//get cityvalue
const city = cityForm.city.value.trim();
cityForm.reset();
forecast.updateCity(city)
.then(data=>updateUi(data))
.catch(error=>console.log(error))

//set localstorage
localStorage.setItem('city',city);
});

if(localStorage.getItem('city')){
    forecast.updateCity(localStorage.getItem('city'))
    .then(data=> updateUi(data))
    .catch(error=>console.log(error));
}