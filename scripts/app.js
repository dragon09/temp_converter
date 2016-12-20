window.onload = function () {
  console.log('lol')

  document.getElementById('celsius').onkeyup = updateFahrenheit;

document.getElementById('fahrenheit').onkeyup =
  updateCelsius;

document.getElementById('celsius').value = 0;

// initial value on page load
updateFahrenheit();

function updateFahrenheit() {
  var c = document.getElementById('celsius').value;
  var f;
  if ((c == null) || (c == "") || (isNaN(c))) {
    f = "";
  } else {
    f = celsiusToFahrenheit(c);
  }
  document.getElementById('fahrenheit').value = f;
}

function updateCelsius() {
  var f = document.getElementById('fahrenheit').value;
  var c;
  if ((f == null) || (f == "") || (isNaN(f))) {
    c = "";
  } else {
    c = fahrenheitToCelsius(f);
  }
  document.getElementById('celsius').value = c;
}

function myround(x) {
  return Math.round(10 * x) / 10;
}

function celsiusToFahrenheit(c) {
  var answer = c * 9 / 5 + 32;
  return myround(answer);
}

function fahrenheitToCelsius(f) {
  var answer = (f - 32) * 5 / 9;
  return myround(answer);
}


// var report = function (celsius, fahrenheit) {
//   document.getElementById('result').innerHTML =
//   celsius + "\xb0C = " + fahrenheit + "\xb0F";
//   };
//
//
// window.onload = function () {
//   document.getElementById("f_to_c").onclick = function () {
//   var f = document.getElementById('temperature').value;
//   report((f - 32) / 1.8, f);
//   };
//
// document.getElementById("c_to_f").onclick = function () {
//   var c = document.getElementById('temperature').value;
//   report(c, 1.8 * c + 32);
//   };
//
// };

};
