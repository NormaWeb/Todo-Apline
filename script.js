function print_today_date() {
    // Date object
    const date = new Date();

    let currentDay = String(date.getDate()).padStart(2, '0');

    let currentMonth = String(date.getMonth() + 1).padStart(2, "0");

    let currentYear = date.getFullYear();

    // we will display the date as DD-MM-YYYY 

    let currentDate = `${currentDay}-${currentMonth}-${currentYear}`;

    document.querySelector('.today-date').innerHTML = currentDate;

    // console.log("The current date is " + currentDate);
}
print_today_date();
