async function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let city = document.getElementById('destination').value
    let start = document.getElementById('startDate').value
    let end = document.getElementById('endDate').value


    let res = await Client.checkForInput(city, start, end);

    if (res) {
        console.log("::: Form Submitted :::")


        let cityInfo = await getCityData(city);

        console.log("::cityInfo:::")
        console.log(cityInfo);

        let weatherInfo = await getWeatherForeCast(cityInfo.Lat, cityInfo.Lng);

        console.log("::weatherInfo:::")
        console.log(weatherInfo);

        let cityImage = await getCityImage(city);

        console.log("::cityImage:::")
        console.log(cityImage);

    }



}

//constants 
const geoNameUrl = 'http://api.geonames.org/searchJSON?formatted=true&q='
const geoNameUserName = '&username=sabina.sayeed';

const weatherUrl = 'https://api.weatherbit.io/v2.0/forecast/daily?'
const weatherKey = '&key=4015ac0fa90c4513ad0d11332e2750bb';

const pixbayUrl = 'https://pixabay.com/api/?'
const pixabayKey = '&key=16362413-90349cec38d57c850404f50c5';


async function getCityData(city) {
    const res = await fetch(geoNameUrl + city + geoNameUserName + '&style=full')
    let cityData = {};
    try {
        const data = await res.json();
        console.log("getCity: no error: ", data);
        if (data.totalResultsCount == 0) {
            console.log("City not found")
        } else {
            cityData.Lat = data.geonames[0].lat;
            cityData.Lng = data.geonames[0].lng;

        }
        return cityData;
    } catch (error) {
        console.log("getCity: error", error);
        // appropriately handle the error
    }
}

async function getWeatherForeCast(lat, lon) {
    const res = await fetch(weatherUrl + '&lat=' + lat + '&lon=' + lon + weatherKey)
    try {
        const data = await res.json();
        console.log("getWeatherForeCast: no error: ", data);

        return data;
    } catch (error) {
        console.log("getWeatherForeCast: error", error);
        // appropriately handle the error
    }
}

async function getCityImage(city) {

    const res = await fetch(pixbayUrl + pixabayKey + '&q=' + city + '&image_type=photo&pretty=true&category=places')
    try {
        const data = await res.json();
        console.log("getCityImage: no error: ", data);

        return data;
    } catch (error) {
        console.log("getCityImage: error", error);
        // appropriately handle the error
    }
}



export { handleSubmit }