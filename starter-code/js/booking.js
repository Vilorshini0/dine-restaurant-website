// $('.date').focusout(function(){
//     var date = parseInt($('#date').val());
//     var month = parseInt($('#month').val());
//     var year = parseInt($('#year').val());
//     if (isNaN(date) || isNaN(month) || isNaN(year)) {
//       alert('wrong format');
//       return false;
//     } else {
//       if (date > 31 || date < 1) {
//         alert('wrong date');
//         return false;
//       } else if ((month==4 || month==6 || month==9 || month==11) && date ==31) {
//         alert('wrong date');
//         return false;
//       } else if (month==2) {
//        var isleap = (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0));
//         if (date> 29 || (date ==29 && !isleap))
//             alert('wrong date');
//           return false;
//       }
//       if (month > 12 || month < 1) {
//         alert('wrong month');
//         return false;
//       } 
//       if (year > 2050 || year < 1900) {
//         alert('wrong year');
//         return false;
//       } 
//     }
//   });

// function getTime() {
//     var hour = document.getElementById("hour").value;
//     var minute = document.getElementById("minute").value;
//     var ampm = document.getElementById("ampm").value;

//     if (validateTime(hour, minute)) {
//         alert("Selected time: " + hour + ":" + minute + " " + ampm);
//     } else {
//         alert("Please enter a valid time.");
//     }
// }

// function validateTime(hour, minute) {
//     // Convert hour and minute to integers
//     hour = parseInt(hour);
//     minute = parseInt(minute);

//     // Check if hour and minute are within valid ranges
//     if (hour >= 1 && hour <= 12 && minute >= 0 && minute <= 59) {
//         return true;
//     } else {
//         return false;
//     }
// }

// function updatePlaceholder(value) {
//     var inputField = document.getElementById("inputField");
//     inputField.placeholder = " - " + value + " people +";
// }

// // Function to increment value by 1
// function increment() {
//     var inputField = document.getElementById("inputField");
//     var value = parseInt(inputField.value) + 1;
//     inputField.value = value;
//     updatePlaceholder(value);
// }

// // Function to decrement value by 1
// function decrement() {
//     var inputField = document.getElementById("inputField");
//     var value = parseInt(inputField.value);
//     if (value > 0) {
//         value--;
//         inputField.value = value;
//         updatePlaceholder(value);
//     }
// }



// Function to increment value by 1
function increment() {
    var inputField = document.getElementById("inputField");
    var value = parseInt(inputField.value) + 1;
    inputField.value = value;
    updatePlaceholder(value);
}

// Function to decrement value by 1
function decrement() {
    var inputField = document.getElementById("inputField");
    var value = parseInt(inputField.value);
    if (value > 0) {
        value--;
        inputField.value = value;
        updatePlaceholder(value);
    }
}

function updatePlaceholder(value) {
    var inputField = document.getElementById("inputField");
    inputField.value = value + " people" ;
    console.log(value);
}


updatePlaceholder(0);