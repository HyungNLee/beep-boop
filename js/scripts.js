//Back-End

//Function checks if a string is a number. If it is a number, returns false.
function isNotNumber(string) {
  var regex = /[^0-9]/;
  return regex.test(string);
}

//Function to convert userInput to a number and make an array from 0 to the user num.
function toNumArray(string) {
  var userNum = parseInt(string);
  var numArray = [];
  var fillNum = 0;
  while (fillNum <= userNum) {
    numArray.push(fillNum);
    fillNum += 1;
  }
  return numArray;
}

//Function to converts a number to either "Beep!", "Boop!", or "I'm sorry, 'username'. I'm afraid I can't do that"
function numConvert(array, userName) {
  var convertedArray = array.map(function(number) {
    if (number !== 0 && number % 3 === 0) {
      return "I'm sorry, " + userName + ". I'm afraid I can't do that.";
    } else if (number.toString().includes("1")) {
      return "Boop!";
    } else if (number.toString().includes("0")) {
      return "Beep!";
    } else {
      return number;
    }
  });
  return convertedArray;
}

//Function to append convertedArray to output section in HTML.
function appendResult(array) {
  $("#result").text("");
  var index = 0;
  array.forEach(function(word) {
    $("#result").append("<b>#" + index + "</b> = " + word + "<br>");
    index++;
  })
  $(".results").slideDown();
}

//Function to reverse order and print into result div.
function descending(array) {
  $("#result").text("");
  var revArray = array.slice();
  var revArray = revArray.reverse();
  var index = revArray.length - 1;
  revArray.forEach(function(word) {
    $("#result").append("<b>#" + index + "</b> = " + word + "<br>");
    index--;
  })
}

//Function to check if name has been entered.
function isName(string) {
  if (string) {
    $("#userName").hide();
    $("#nameChange").slideDown();
    $("#userNumber").slideDown();
  } else {
    alert("Please enter a name.")
  }
}

//Main function to call other functions
function startClick(string, userName) {
  if (isNotNumber(string) || !string) {
    alert("Please enter a valid number!");
  } else {
    var numArray = toNumArray(string);
    var convertedArray = numConvert(numArray, userName);
    appendResult(convertedArray);
    return convertedArray;
  }
}

//User Interface
$(document).ready(function() {
  var inputName = "";
  $("#userName").submit(function(event) {
    event.preventDefault();
    inputName = $("#name").val();
    isName(inputName);
  })

  $("#nameChange").click(function() {
    $("#userName").slideDown();
    $("#nameChange").hide();
    $(".results").hide();
    $("#userNumber").slideUp();
  })

  $("#userNumber").submit(function(event) {
    event.preventDefault();
    var userInput = $("#numberBox").val();
    var finishedArray = startClick(userInput, inputName);
    $("#descend").click(function() {
      descending(finishedArray);
      $("#descend").hide();
      $("#ascend").show();
    })
    $("#ascend").click(function() {
      appendResult(finishedArray);
      $("#descend").show();
      $("#ascend").hide();
    })
  })
})
