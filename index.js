document.getElementById('btn').onclick = checkConversion;

function checkConversion() {
    if (document.getElementById('check1').checked) {
        console.log('check1 is checked.');
        celciusToFahrenheit();
    }
    else if (document.getElementById('check2').checked) {
        console.log('check2 is checked.');
        fahrenheitToCelcius();
    }
    else {
        window.alert("select a conversion type!");
    }
}

function celciusToFahrenheit() {
    let input = document.getElementById('input').value;
    input = Number(input);
    let result = (input * (9/5)) + 32;
    result = result.toFixed(2); // limiting number of digits after decimal as 2
    document.getElementById('result').textContent = `Result is ${result} °F`;
    document.getElementById('result').style.display = 'block';
}

function fahrenheitToCelcius() {
    let input = document.getElementById('input').value;
    input = Number(input);
    let result = (input - 32) * (5/9);
    result = result.toFixed(2); // limiting number of digits after decimal as 2
    document.getElementById('result').textContent = `Result is ${result} °C`;
    document.getElementById('result').style.display = 'block';
}