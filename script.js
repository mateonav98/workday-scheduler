// Pseudocode: GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
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

// $('.form-control')
//   .each(function(){
//     var val = parseInt($(this).prop('id'));
//     if(val > currentTime && val < currentTime + 12){
//       $(this).css('background-color','green');
//     }else if(val < currentTime && val > currentTime-12){
//       $(this).css('background-color','Gray');
//     }else if(val === currentTime){
//       $(this).css('background-color','red');
//     }else{
//       $(this).css('background-color','White');
//     }
//   });

// localStorage.setItem()

var saveBtn = document.querySelector("#button-addon2");
var text = document.querySelector("#text")

function getTextData() {
var text = localStorage.getItem("text");
text.textContent=text;

console.log(text)
}
getTextData();

saveBtn.addEventListener("click", function() {
    var text = document.querySelector("#text").value
    localStorage.setItem("text", text);
    getTextData()
})


$('#color-9  .form-control').val(localStorage.getItem('color-9'))
$('#color-10  .form-control').val(localStorage.getItem('color-10'))

