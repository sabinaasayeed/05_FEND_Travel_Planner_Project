export function checkForInput(cityName, startDate, endDate) {
    console.log("::: Running checkForInput :::", cityName);
    console.log("::: Running checkForInput :::", startDate);
    console.log("::: Running checkForInput :::", endDate);

    let res = 0;

    if (!validateDate(startDate)) {
        res++;
        alert("You have entered an Invalid start Date, Try again!")
    }

    if (!validateDate(endDate)) {
        res++;
        alert("You have entered an Invalid End Date, Try again!")
    }

    if (!isFutureDate(startDate)) {
        res++;
        alert("Invalid start date in past, Try again!")
    }

    if (!isFutureDate(endDate)) {
        res++;
        alert("Invalid end date in past, Try again!")
    }

    if (startDate > endDate) {
        res++;
        alert("Your End Date should be bigger than Start Date , Try again!")
    }

    console.log("::: Running checkForInput ::res:", res);


    return res;
}


export function isFutureDate(date) {
    return (Math.ceil((new Date(date) - Date.now()) / (1000 * 60 * 60 * 24)) >= 0);
}


function validateDate(date) {
    return (date.match(/^[0-9]{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])/))
}