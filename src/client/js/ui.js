export async function createModalUi(data) {

    var newTripModal = document.createElement('div');
    newTripModal.classList.add('trip_info');

    console.log("::createModalUi:::")
    console.log(data);
    let content = '';

    let cityName = data.cityInfo.city;
    let test = `my test value is${data.cityInfo.name}, ${data.cityInfo.countryName} ${data.startDate}`;
    console.log('::test::')
    console.log(test)

    let diff = await daysDiff(data.startDate, data.endDate)
    console.log(diff)

    let weather = await processWeather(data.weatherInfo.data, data.startDate)
    console.log("::weather::", weather)

    let iconUrl = `https://www.weatherbit.io/static/img/icons/${weather.weather.icon}.png`

    content += `
        <div id="tripModal" class="modal fade" tabindex="-1">
          <div class="modal-dialog">
              <div class="modal-content">
                  <div class="modal-header">
                      <h5 class="modal-title">${data.cityInfo.name} , ${data.cityInfo.countryName}</h5>
                      <button type="button" class="close" data-dismiss="modal">&times;</button>
                  </div>
                  <div class="modal-body">
                      <div class="container-fluid">
                          <div class="media row">
                              <img src="${data.imageUrl}" class="images mr-2 col-10 col-md-5" alt="Trip Location Image">
                              <div class="media-body col-12 col-lg-7">
                                  <h4 class="mt-0">Trip to: <span>${data.cityInfo.name}</span></h4>
                                  <h6 class="mt-0">${data.startDate} - ${data.endDate} </h6>
                                  <h6 class="mt-0">Duration: ${diff} days</h6>
                              </div>
                          </div>
                          <div class="media row">
                              <img src="${iconUrl}" class="images mr-2 col-5 col-md-3" alt="weather Image" ">
                        <div class="media-body col-12 col-lg-7 ">
                          <h6 class="mt-0 ">Weather Forecast</h6>
                          <h6 class="mt-0 ">${weather.max_temp} <span>°C</span></h6>
                          <h6 class="mt-0 ">${weather.weather.description}</h6> 
                        </div>                  
                    </div>
                  </div>
                  <div class="modal-footer ">
                      <button type="button " class="btn btn-secondary " data-dismiss="modal ">Cancel</button>
                      <button type="button " class="btn btn-primary ">Save</button>
                  </div>
              </div>
          </div>
          </div>
       </div>`;

    newTripModal.innerHTML = content;

    console.log(newTripModal.innerHTML);

    return newTripModal;



}

async function processWeather(forecaseInfo, startDate) {

    console.log("::processWeather:::")
    console.log(forecaseInfo);
    console.log(startDate);


    let obj = forecaseInfo.find(o => o.valid_date === startDate);
    /*   if (obj == undefined) {
        let currentDate = new Date(Date.now()).toLocaleDateString('en-GB');
        obj = forecaseInfo.find(o => o.valid_date === currentDate);
    }
*/
    console.log("::obj ::", obj);


    return obj;


}


async function daysDiff(start, end) {

    console.log("::daysDiff:::")
    let d1 = new Date(start);
    console.log('d1', d1)
    let d2 = new Date(end);
    console.log('d2', d2)

    const diffTime = Math.abs(d2 - d1);
    console.log('diffTime', diffTime)

    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    console.log('diffDays', diffDays);
    return diffDays;
}