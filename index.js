let box=document.querySelector(".box");
let city=document.querySelector("input");

let btnclick=document.querySelector("button");
//let city="dehli"
const APIkey="4357583b230e807b4489064bb6883af0";
 async function getWeather(APIKey,city){
    let response=(await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&units=metric&appid=${APIKey}`));
    let data=await response.json();
    console.log(data);
   if(city.value!=="")
   {
    if(data.cod==404)
   {
    let img=document.createElement("img");
    img.className+="img404";
    img.src="images/404.png"
    box.appendChild(img);
    alert("You have Entered Wrong City Name. Please Enter Coorect one");
    setTimeout(() => {
        window.location.reload();
    },5000);
   }
   else{
    let outputbox=document.createElement("div")
    outputbox.className+="outputbox";
    box.appendChild(outputbox)
    let cityname=document.createElement("h4");
    cityname.innerText=data.name;
    cityname.className+="cityname"
    outputbox.appendChild(cityname);
    let child_div=document.createElement("div");
    child_div.className+="child_div"
    outputbox.appendChild(child_div);
    let img=document.createElement("img");
    img.className+="imgs";
    switch (data.weather[0].main) {
        case "Clear":
          img.src = "clear.png";
          break;

        case "Rain":
          img.src = "rain.png";
          break;

        case "Snow":
          img.src = "snow.png";
          break;

        case "Clouds":
          img.src = "cloud.png";
          break;

        case "Haze":
          img.src = "mist.png";
          break;
        case "smoke":
        
        break;
        default:
          img.src = "https://cdn-icons-png.flaticon.com/128/3501/3501787.png";
      }

    child_div.appendChild(img);
    let descrp=document.createElement("div");
    descrp.className+="descrp";
    child_div.appendChild(descrp);
    let temp=document.createElement("p");
    temp.className+="temp1";
    temp.innerHTML=`${data.main.temp} &#8451`;
    descrp.appendChild(temp);
    let description=document.createElement("p");
    description.className+="description";
    description.innerHTML=`${data.weather[0].description}`
    descrp.appendChild(description);
    let infodiv=document.createElement("div")
    infodiv.className+="infodiv";
    outputbox.appendChild(infodiv);
    let innerbox=document.createElement("div");
    innerbox.className+="innerbox";
    infodiv.appendChild(innerbox);
    let humidity=document.createElement("p");
    humidity.className+="humidity";
    humidity.innerHTML=` Humidity :${data.main.humidity} %`;
    innerbox.appendChild(humidity);
    let mintemp=document.createElement("p")
    mintemp.innerHTML=`Min Temp:${data.main.temp_min} &#8451`
      innerbox.appendChild(mintemp);
      mintemp.className+="mintemp";
    let maxtemp=document.createElement("p")
    maxtemp.innerHTML=`Max Temp:${data.main.temp_max} &#8451`
      maxtemp.className+="maxtemp"
      innerbox.appendChild(maxtemp);
      let wind=document.createElement("p")
      wind.className+="wind";
      wind.innerHTML=` Wind: ${data.wind.speed} km/hr`;
      innerbox.appendChild(wind)
   }
   }
}
btnclick.addEventListener("click",()=>{
    getWeather(APIkey,city);
  
})
