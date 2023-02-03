// find  largest name amd make him best friend 

const friend = [ "resan", "riyad khan", "topu malitha" , "noman parvej resad","maruf hossian"];
function bestFriend( arr){
    let bestFriend = "";
    for (let i = 0; i< arr.length; i++){
        if (arr[i].length > bestFriend.length) {
            bestFriend = arr[i]
        }
    }
    return bestFriend
}
let bestBuddy = bestFriend(friend);
console.log(bestBuddy)

// a function if any negative number fund it will return previous number of array 

const number = [12, 851, 12, 89, -65, 56, -54, 25]

function positiveArray( arr){
    const positive = [];
    for(let i = 0; i< arr.length; i++){
        if(arr[i]< 0){
            break
        }else{
            positive.push(arr[i]);
        }
    }
    return positive
}

let positiveNumberArray = positiveArray(number);
console.log(positiveNumberArray);