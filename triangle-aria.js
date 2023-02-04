// get triangle aria from three side 

// triangleAria = root( s(s-a)(s-b)(s-c))

let side1 = 10;
let side2 = 11;
let side3 = 1;

function triangleAria( a, b, c){
    const sum= (a+ b+ c) /2 ;
    let aria = "";
    let massage = "The sum of two sides must be larger than the third."
    if ( a+b<=c || a+c<=b || a+c<=b || b+c<=a){
        return massage;
    }else{
        aria = Math.sqrt(sum *  (sum - a)*(sum - b)*(sum - c));
        return aria ;
    }
}

let result = triangleAria(side1, side2, side3);
console.log(result);