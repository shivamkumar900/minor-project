const button =document.getElementById('get-location')
async function getData(lat,long){ 
    const promise = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=b36ce800748e42c8a57113836241108&q=${lat},${long}&aqi=yes`
    );
    return await promise.json()

}

async function gotLocation(position){
    const result = await getData(position.coords.latitude, position.coords.longitude);
    console.log(result);

}
function failedToGet(){
    console.log("there is an issue" )
}
button.addEventListener('click',async()=>{
    navigator.geolocation.getCurrentPosition(gotLocation,failedToGet)
});
