// API for realtime weather data -- http://api.weatherapi.com/v1/current.json?key=b793ad3d7d4444a791493152262406&q=Lucknow&aqi=no

let target= 'Lucknow';

const fetchResults = async (targetLocation) => {
    let url = "http://api.weatherapi.com/v1/current.json?key=b793ad3d7d4444a791493152262406&q=${targetLocation}&aqi=no"

    const res = await fetch(url);
    const data = await res.json();
    // console.log(data)
    let locationName = data.location.name;
    let time = data.location.localtime;
    let temp = data.current.temp_c;
}

fetchResults(target)