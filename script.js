document.addEventListener("DOMContentLoaded", function() {
    var output = document.getElementById('output');

    for (var i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            output.innerHTML += "FizzBuzz<br>";
        } else if (i % 3 === 0) {
            output.innerHTML += "Fizz<br>";
        } else if (i % 5 === 0) {
            output.innerHTML += "Buzz<br>";
        } else {
            output.innerHTML += i + "<br>";
        }
    }
});
