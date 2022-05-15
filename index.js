
function getdata(){

    let city = document.getElementById("city").value;
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=27cd6fa58f5d120a8c41d54ebdd3a016`

    fetch(url)
    .then (function(res){
        return res.json();
    })
    .then(function(res){
        append(res)
        console.log(res)
    })
    .catch(function(err){
        console.log(err)
    });

};

function append(data){

    let box = document.querySelector("#container")
    box.innerHTML=null;
    let mapbox = document.querySelector("#mapbox")

    let map = document.getElementById("gmap_canvas")
    map.src=`https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`

    mapbox.append(map)
    

    let name = document.createElement("h2");
    name.textContent=`city name:  ${data.name}`;

    let min_temp = document.createElement("h2");
    min_temp.textContent=`min_temp: ${Math.floor(Number(data.main.temp_min)-273.13)} °C`;

    
    let max_temp = document.createElement("h2");
    max_temp.textContent=`max_temp: ${Math.floor(Number(data.main.temp_max)-273.13)} °C`;

    let wind = document.createElement("h2");
    wind.textContent=`wind speed: ${data.wind.speed} km/h`;

    let clounds = document.createElement("h2");
    clounds.textContent=` clounds: ${data.clouds.all}`;

    let sunriseimg = document.createElement("img")
    sunriseimg.setAttribute("id","sunimg")
    sunriseimg.src="https://webneel.com/wallpaper/sites/default/files/images/05-2014/2-sunrise-wallpaper.preview.jpg"

    let sunrise = document.createElement("h2");
    sunrise.textContent=`sunrise: ${data.sys.sunrise}`;

    let sunsetimg = document.createElement("img")
    sunsetimg.setAttribute("id","sunimg")
    sunsetimg.src="https://images.unsplash.com/photo-1610025604545-34f99f8cb078?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdWR5JTIwc3Vuc2V0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"

    let sunset = document.createElement("h2");
    sunset.textContent=`sunset: ${data.sys.sunset}`;

    box.append(name,min_temp,max_temp,wind,clounds,sunriseimg,sunrise,sunsetimg,sunset)

  

}

