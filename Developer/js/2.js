console.log("initial value is 70 ")

function fToC2(fahrenheit) 
{
  let fTemp = fahrenheit;
  let fToCel = (fTemp - 32) * 5 / 9;
  if (fTemp > 70)
  {
  let message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
    console.log(message);
    }
} 

let temprature = [32,70,99,106];

    temprature.forEach(fToC2);

    


