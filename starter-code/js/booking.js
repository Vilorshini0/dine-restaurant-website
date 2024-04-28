$('#submit').click(function(e){
    e.preventDefault();
    validateName();
    validateEmail();
    checkDate ();
    checkNumPeople ();
    checkTime(hour, minute);

    setTimeout(function() {
        var noBlockSpan = true;
        $('span.error').each(function() {
            if ($(this).css('display') === 'block') {
                noBlockSpan = false;
                return false;
            }
        });

        if (noBlockSpan) {
            showPopup();
        }
    }, 500);
    
});

// Show success popup container
function showPopup() {
    $('#popupContainer').fadeIn();
    $('body').css('overflow', 'hidden');
};

// Hide success popup container
function hidePopup() {
    $('#popupContainer').fadeOut();
    $('body').css('overflow', 'auto');
};

//Validate time
function checkTime(hour, minute) {
    $('#theTime').css('display','none');

    var currentTime = new Date();
    var currentHour = currentTime.getHours();
    var currentMinute = currentTime.getMinutes();

    var hour = parseInt($('#hour').val());
    var minute = parseInt($('#minute').val());

    if (hour < currentHour || (hour === currentHour && minute < currentMinute) || isNaN(minute) || isNaN(hour) ) {
        $('#theTime').css('display','block');
    }
};

$(document).ready(function() {
    //Name field Letters Only
    $('#name').on('input', function() {
        var inputValue = $(this).val();
        var sanitizedValue = inputValue.replace(/[^a-zA-Z]/g, ''); // Remove non-alphabetic characters
        $(this).val(sanitizedValue);
    });

    //Changes AM Pm according to Hours input
    $('#hour').on('input', function() {
        var hour = parseInt($(this).val());
        if (hour > 12) {
            $('#ampm').val('PM');
        } else {
            $('#ampm').val('AM');
        }
    });

    $('#closePopup').click(function() {
        hidePopup();
    });
});

// Check if Name input is empty
function validateName() {
    $('#theName').css('display','none');
    var name = $('#name').val().trim();
    if (name == '')  {
        $('#theName').css('display','block');
    }
};

//Validate Email field
function validateEmail() {
    var email = $('#email').val();
    var pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Regular expression for email pattern
    
    if (pattern.test(email)) {
        $('#theEmail').css('display','none');
    } else {
        $('#theEmail').css('display','block');
    }
};

//Validate date field
function checkDate () {
    $('#theDate').css('display','none');

    var date = parseInt($('#date').val());
    var month = parseInt($('#month').val());
    var year = parseInt($('#year').val());
    var isleap = (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0));
    var currentYear = new Date().getFullYear();

    if ((date > 31 || date < 1) || (isNaN(date) || isNaN(month) || isNaN(year)) || ((month==4 || month==6 || month==9 || month==11) && date ==31) || (month > 12 || month < 1) || (year > 2050 || year < currentYear)) {
    $('#theDate').css('display','block');
    } else if (month==2) {
        if (date> 29 || (date ==29 && !isleap))
        $('#theDate').css('display','block');
    }
};

//Validate number of people field
function checkNumPeople () {
    $('#people').css('display','none');

    var inputValue = $('#inputField').val();

    if (parseInt(inputValue) === 0) {
        $('#people').css('display','block');
        
    }
};

// Function to increment value by 1
function increment() {
    var inputField = document.getElementById("inputField");
    var value = parseInt(inputField.value) + 1;
    inputField.value = value;
    updatePlaceholder(value);
};

// Function to decrement value by 1
function decrement() {
    var inputField = document.getElementById("inputField");
    var value = parseInt(inputField.value);
    if (value > 0) {
        value--;
        inputField.value = value;
        updatePlaceholder(value);
    }
};

function updatePlaceholder(value) {
    var inputField = document.getElementById("inputField");
    inputField.value = value + " people" ;
};

updatePlaceholder(0);