

//Current day displaying at top of header
var date =  moment().format("[Hello, Today is] dddd, MMMM Do YYYY");
$("#currentDay").text(date)
console.log(date)


function colorUpdater() {
    // getting the current hours
    const momentTime = moment().hours();
    
    $('.form-control').each(function() {
        let myBlockTime = parseInt($(this).attr('id').split('-')[1]);
        //if time blocks are less than the the current hour then they are in the past
        if(myBlockTime < momentTime) {
            $(this).addClass('past')
        // if timeblock is equal to the current hour then it is the presetn
        }else if(myBlockTime == momentTime) {
            $(this).removeClass('past')
            $(this).addClass('present')
        }
        // everything else is the future
        else {
            $(this).removeClass('past');
            $(this).removeClass('present');
            $(this).addClass('future');
        }
    })
}
colorUpdater();



//when save button is clicked text data is saved in local storage
$('.saveBtn').on('click',function(){
var textData = $(this).parent().siblings('.description').attr('id')
var text = $(this).parent().siblings('.description').val()
 console.log(text)
    function store(){
        localStorage.setItem(textData, text);
    }
    store();
})

//when page is refreshed saved info stays
function keep(){
    $('textarea').each(function () {
        $(this).val(localStorage.getItem($(this).attr('id')));
      });
}
keep();


