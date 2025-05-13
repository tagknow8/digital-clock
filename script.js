function twelveHourClock(hour) {
    if (hour > 12) {
        return hour - 12
    } else if (hour = 0) {
        return 12
    } else {
        return hour
    }
};

function addMinuteAndSecondDigit(number) {
    return number.toString().length < 2 ? `0${number}` : number;
};

function amPm (hour) {
    return hour < 12 ? "AM" : "PM";
};

function ordinalNumber(number) {
    if ([1,21,31].includes(number)) return `${number}st`;
    if ([2,22].includes(number)) return `${number}nd`;
    if ([3,23].includes(number)) return `${number}rd`;
    return `${number}th`;
};

const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function updateClock() {
    let dateObject = new Date();

    let numberHour = twelveHourClock(dateObject.getHours());
    let numberMinutes = addMinuteAndSecondDigit(dateObject.getMinutes());
    let numberSeconds = addMinuteAndSecondDigit(dateObject.getSeconds());
    let textAmPm = amPm(dateObject.getHours());
    let textTime = `${numberHour}:${numberMinutes}:${numberSeconds} ${textAmPm}`

    let textDayOfWeek = daysOfWeek[dateObject.getDay()];
    let textMonth = monthsOfYear[dateObject.getMonth()];
    let textOrdinalNumber = ordinalNumber(dateObject.getDate());
    let numberYear = dateObject.getFullYear();
    let textDate = `${textDayOfWeek}, ${textMonth} ${textOrdinalNumber} ${numberYear}`;

    document.getElementById("text-time").textContent = textTime;
    document.getElementById("text-date").textContent = textDate;
};

setInterval(updateClock, 500);

updateClock();