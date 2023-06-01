function OnGeoOK(position) {
    const lat = position.coords.latitude; 
    const lng = position.coords.longitude;
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=d7e1a97bdc2010e010e2bdf80fe64a52`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = Math.round(data.main.temp-273.15) + "°";
    });
}
function OnGeoErr() {
    alert("위치 정보를 가져올 수 없습니다.");
}

navigator.geolocation.getCurrentPosition(OnGeoOK, OnGeoErr);