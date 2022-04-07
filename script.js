// Pseudocode: GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist


// to do:
//1. get current day to show up at top of screen using moment()
//2. 

//Current day displaying at top of header
var date =  moment().format("[Hello, Today is] dddd, MMMM Do YYYY");
$("#currentDay").text(date)
console.log("hello", date)