// Pseudocode: GIVEN I am using a daily planner to create a schedule
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
console.log(date)


var currentTime = moment().format('H');
console.log()
function colorUpdater() {
    const momentTime = moment().hours();

    $('.form-control').each(function() {
        let myBlockTime = parseInt($(this).attr('id').split('-')[1]);
        if(myBlockTime < momentTime) {
            $(this).addClass('past')
        }else if(myBlockTime == momentTime) {
            $(this).removeClass('past')
            $(this).addClass('present')
        }
        else {
            $(this).removeClass('past');
            $(this).removeClass('present');
            $(this).addClass('future');
        }
    })
}
colorUpdater();



var saveBtn = document.querySelector("#button-addon2");
var text6 = document.querySelector("#text6")
var text7 = document.querySelector("#text7")

function getText6Data() {
var text6 = localStorage.getItem("text6");
text6.textContent=text6;

console.log(text6)
}
getText6Data();
saveBtn.addEventListener("click", function() {
    var text6 = document.querySelector("#text6").value
    localStorage.setItem("text6", text6);
    getText6Data()
    
})
$('.saveBtn').on('click',function(){
    var timeOfEvent = $(this).siblings('.description').attr('data');
    console.log(timeOfEvent)
    var perform = $(this).siblings('.description').val();
    console.log(perform)
    function save(){
        localStorage.setItem(timeOfEvent, perform);
    }
    save();

$('#color-6  .form-control').val(localStorage.getItem('color-6'))
$('#color-10  .form-control').val(localStorage.getItem('color-10'))

