// Clarence Willey Expressions

var daysWeek = prompt('Vacation Calculator \n Enter the number of days you worked this week? \n Enter a number 1 - 7.');  // collecting first var for equation for each day worked you will earn .5 hours

var weeks = prompt('How many weeks in this month? \n Enter a number 1 - 5.'); //second variable   multiply days worked by weeks to give total days for the month

var lates = prompt('How many times were you late this month? \n Please enter any number.');  // lates will deduct .5 hours in vacation

var result = (daysWeek * weeks) * .50 - (lates * .50);

alert('You will have ' + result + ' hours of vacation this month');

