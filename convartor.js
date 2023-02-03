// -------------------convert feet to inch 

function  feetToInch(value){
    const perFeet = 12;
    const inch = perFeet * value ;
    return inch;
}

let feet = 2; 
let resultInch = feetToInch(feet);
// console.log(resultInch);

//-------------------- convert  centimeter to meter -----------------

function centimeterToMeter(value){
    const perMeter = 100;
    const meter = value/perMeter;
    return meter
}

let centimeter = 500;
let meter = centimeterToMeter(centimeter);
console.log(meter);