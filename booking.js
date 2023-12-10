/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
let cost = 0;
let dayCounter= 0;

const halfday = document.getElementById("half");
const fullday = document.getElementById("full");
const homeclear = document.getElementById("clear-button");

const monday = document.getElementById("monday");
const tuesday = document.getElementById("tuesday");
const wednesday = document.getElementById("wednesday");
const thursday = document.getElementById("thursday");
const friday = document.getElementById("friday");

const days = [monday, tuesday, wednesday, thursday, friday];



/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
function daily() {
    const clickedDay = event.target;

    if (!clickedDay.classList.contains("clicked")) {
        clickedDay.classList.add("clicked");
        dayCounter++;
        recalculate();
    } else {
        clickedDay.classList.remove("clicked");
        dayCounter--;
        recalculate();
    }
}

days.forEach(function (day) {
    day.addEventListener("click", daily);
});

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
function clear() {
    days.forEach(function (day) {
        day.classList.remove("clicked");
    });

    dayCounter = 0;
    recalculate();
}

homeclear.addEventListener("click", clear);

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
function halfButton() {
    cost = 20;
    halfday.classList.add("clicked");
    fullday.classList.remove("clicked");
    recalculate();
}

halfday.addEventListener("click", halfButton);

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
function fullButton() {
    cost = 35;
    halfday.classList.remove("clicked");
    fullday.classList.add("clicked");
    recalculate();
}

fullday.addEventListener("click", fullButton);

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function recalculate() {
    const costLabel = document.getElementById("calculated-cost");
    const totalCost = dayCounter * cost;
    costLabel.innerText = totalCost;
}

