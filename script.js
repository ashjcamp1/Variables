var containerEle = document.body.querySelector(".container");

var bill=Number(prompt("What is the total bill?"));

var tax=bill*1.07;

var tip=tax*0.05;

tip=(tip).toFixed(2);

tax=(tax).toFixed(2);

containerEle.innerHTML="Taxed bill is: $" + tax + ", " + "Tip is: $" + tip;