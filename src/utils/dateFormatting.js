const calcTime = (dateISOFormat) => {
    let date = new Date(dateISOFormat).toDateString();
    let newDate = date.substr(4, 12);
    return newDate;
}

const calcDayOfWeek = (dateISOFormat) => {
    let day = new Date(dateISOFormat).getDay();
    let week = {
        0: "Sunday",
        1: "Monday",
        2: "Tuesday",
        3: "Wednesday",
        4: "Thursday",
        5: "Friday",
        6: "Saturday"
    }

    return week[day];
}

export { calcTime, calcDayOfWeek };
