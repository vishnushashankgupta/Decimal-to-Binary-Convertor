console.log("javaScript is working");

function calculate() {
    var number = document.getElementById('number').value;

    function dec2bin(number){
        return (number >>> 0).toString(2);
      }

    
    document.querySelector('#final-result').textContent = dec2bin(number);
    // document.getElementById('result').value = Factorial(number);
    console.log("statement ended");
}
