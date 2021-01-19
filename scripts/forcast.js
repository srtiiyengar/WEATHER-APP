
class Forecast{
    constructor(){
        this.key = 'vAlhVGFPDTiSmdTmkE5Q7v7PgxRJRTrw';
        this.weatherURI = 'http://dataservice.accuweather.com/currentconditions/v1/';
        this.cityURI = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    }
    async updateCity(city){
        const cityDets = await this.getCity(city);
        const weather = await this.getWeather(cityDets.Key);
        return {cityDets,weather};
    }
    async getCity(city){
        //const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
        const query = `?apikey=${this.key}&q=${city}`;
        const response = await fetch(this.cityURI+query);
        const data = await response.json();
    // console.log(data);
    return data[0];
    }
    async getWeather(locationkey){
        //const base ='http://dataservice.accuweather.com/currentconditions/v1/';
        const query=`${locationkey}?apikey=${this.key}`;
        const response =await fetch(this.weatherURI+query);
        const data = await response.json();
// console.log(data);
return data[0];
    }
}
// const key ='vAlhVGFPDTiSmdTmkE5Q7v7PgxRJRTrw';
// //get wheather info
// const getWeather= async(locationkey)=>{
// const base ='http://dataservice.accuweather.com/currentconditions/v1/';
// const query=`${locationkey}?apikey=${key}`;
// const response =await fetch(base+query);
// const data = await response.json();
// // console.log(data);
// return data[0];
// }
// //get city info
// const getCity= async (city)=>{
//     const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
//     const query = `?apikey=${key}&q=${city}`;
//     const response = await fetch(base+query);
//     const data = await response.json();
//     // console.log(data);
//     return data[0];
// };




