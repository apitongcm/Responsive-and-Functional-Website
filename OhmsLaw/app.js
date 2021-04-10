const hamburger = document.querySelector('.hamburger');
const navlinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');


hamburger.addEventListener("click",() =>{
    navlinks.classList.toggle("open");
    links.forEach(links =>{
        links.classList.toggle("fade");
    });
});



function myFunction() {
    var x = document.getElementById("num1").value;
    var y = document.getElementById("num2").value;
    var ans = x * y;
    var z = ans.toFixed(3);
    document.getElementById("demo").innerHTML = "The answer is: " + z + " volts";
  }


  function myFunction1() {
    var x = document.getElementById("num3").value;
    var y = document.getElementById("num4").value;
    var ans = y/x;
    var z = ans.toFixed(3);
    document.getElementById("demo1").innerHTML = "The answer is: " + z + " amperes";
  }


  function myFunction2() {
    var x = document.getElementById("num5").value;
    var y = document.getElementById("num6").value;
    var ans = y/x;
    var z = ans.toFixed(3);
    document.getElementById("demo2").innerHTML = "The answer is: " + z + " ohms";
  }