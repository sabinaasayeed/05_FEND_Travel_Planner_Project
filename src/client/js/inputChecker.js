export function checkForInput(cityName, startDate, endDate) {
    console.log("::: Running checkForInput :::", cityName);
    console.log("::: Running checkForInput :::", startDate);
    console.log("::: Running checkForInput :::", endDate);



    var res1 = validateDate(startDate)
    console.log(":::  res from checkForInput :::", res);

    if (!res1) {
        alert("You have entered an Invalid Start Date, Try again!")
    }

    var res2 = validateDate(endDate);
    if (!res2) {
        alert("You have entered an Invalid End Date, Try again!")
    }


    if (startDate > endDate) {
        alert("Your End Date should be bigger than Start Date , Try again!")
    }

    var res = res1 && res2;
    return res;
}

function validateDate(date) {
    return (date.match(/^[0-9]{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])/))
}