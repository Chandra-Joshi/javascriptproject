const humidit=document.querySelector(".humid");
const winds=document.querySelector(".win");
const cites=document.querySelector(".city");
const temperature=document.querySelector(".temp");
const searchinput=document.querySelector(".searchbox input");
const searchbtn=document.querySelector("#btn");



const apiurl="https://api.openweathermap.org/data/2.5/weather?q=";
const apikey="ed7954c98354c14eacf10227d2bfe8c9";


async function checkweather(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}&units=metric`);
    const data = await response.json();
    console.log(data);




cites.innerHTML=data.name;
temperature.innerHTML=Math.round(data.main.temp) +"°C";
humidit.innerHTML=data.main.humidity +"%";
winds.innerHTML=data.wind.speed + "km/hr";

}
searchbtn.addEventListener("click",()=>{
    const city=searchinput.value.trim();
    if(city){
        checkweather(city);
    }
});



