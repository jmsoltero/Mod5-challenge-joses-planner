
var currentDayEl = $('#currentDay')
var timeBlockEl = $('.timeBlock')
var hourNow = dayjs().hour()
var workingHours= [
  workingHour9,
  workingHour10,
  workingHour11,
  workingHour12,
  workingHour13,
  workingHour14,
  workingHour15,
  workingHour16,
  workingHour17
]

// working hours variables attempt

var workingHour9El = $('#workingHour9')
var workingHour10El = $('#workingHour10')
var workingHour11El = $('#workingHour11')
var workingHour12El = $('#workingHour12')
var workingHour13El = $('#workingHour13')
var workingHour14El = $('#workingHour14')
var workingHour15El = $('#workingHour15')
var workingHour16El = $('#workingHour16')
var workingHour17El = $('#workingHour17')

var workingHour9 = dayjs().hour(9).format('HH');
workingHour9El.text(workingHour9);

var workingHour10 = dayjs().hour(10).format('HH');
workingHour10El.text(workingHour10);

var workingHour11 = dayjs().hour(11).format('HH');
workingHour11El.text(workingHour11);

var workingHour12 = dayjs().hour(12).format('HH');
workingHour12El.text(workingHour12);

var workingHour13 = dayjs().hour(13).format('HH');
workingHour13El.text(workingHour13);

var workingHour14 = dayjs().hour(14).format('HH');
workingHour14El.text(workingHour14);

var workingHour15 = dayjs().hour(15).format('HH');
workingHour15El.text(workingHour15);

var workingHour16 = dayjs().hour(16).format('HH');
workingHour16El.text(workingHour16);

var workingHour17 = dayjs().hour(17).format('HH');
workingHour17El.text(workingHour17);




var currentDay = dayjs().format('dddd, MMMM D');
currentDayEl.text(currentDay);

function assignColors(){
  let workingHours= [
    workingHour9,
    workingHour10,
    workingHour11,
    workingHour12,
    workingHour13,
    workingHour14,
    workingHour15,
    workingHour16,
    workingHour17
  ]


for ( var i=0;i < 9;i++) {
  if (workingHours[i]- hourNow < 0){
    $('.col-8').addClass('past')
  }
  else if (workingHours[i]- hourNow > 0){
    $('.col-8').addClass('future')
  }
  else{
    $('.col-8').addClass('present')
  }
} 
}


assignColors()

//function colorChange(){
 // $('.col-8').addClass('future')
//}

//colorChange()


  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
