var previousCalc = 0;
var calc = "";

window.onload  = function() {

  var buttonsArray = document.querySelectorAll(".buttns");



  buttonsArray.forEach(function(button) {

      button.click(function() {
        console.log(button.value)
      });
  });
}




function showNum(value) {
  console.log(value);
    $("txtNumber").value += this.value;
}

function clear() {

  $("txtNumber").text() = "";

  previousCalc = 0;
  calc = "";
}
