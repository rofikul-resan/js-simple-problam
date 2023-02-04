// reverse string function 

let str = "rofikul islam resan";
function reverseString(str){
    let newString = "";
    for(let i=str.length - 1 ; i>= 0; i--){
        newString += str[i]
    }
    return newString ;
}
let reverse = reverseString(str);
// console.log(reverse);

// checking vowel

function isVowel(letter){
    const vowel = [ "a", "e", "i", "o", "u"]
    for (let i = 0; i < vowel.length; i++ ){
        if (letter === vowel[i]){
            return "VOWEL" ;
        }else {
            return "CONSONANT" ;
        }
    }
}

let result = isVowel("w")
console.log(result);