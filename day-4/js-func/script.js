//Partner ex 1
function rock() {
    console.log("I wanna rock!!");
}

//Partner ex 2 , 3 , 4
function convertWeight(number, unit) {
    //if kilos convert to pounds and vice versa 
    if (isNaN(number)) {
        console.log("please insert a number first");
        return;
    } else if (unit === "kilos") {
        return number * 2.20462262;
    } else if (unit === "pounds") {
        return number / 2.20462262; //or mult by 0.45359237
    }
}

// let num = "100";
// console.log(num + " in pounds: " + convertWeight(num, "kilos"));
// console.log(num + " in pounds: " + convertWeight(num, "pounds"));
// num = "bla";
// convertWeight(num, "kilos");

//Individual ex 1
/*function calcAge(curYear, bornYear) {
    return curYear - bornYear;
}*/

//Individual ex 2
// updated calcAge 
function calcAge(curYear, bornYear) {
    console.log("Your are either " + (curYear - bornYear) + " or " + ((curYear - bornYear) + 1));
}

//console.log(calcAge(2017, 1989));


//Individual ex 3
function isPrime(number) {
    return ((number % 2) == 1)
}

//console.log(isPrime(1));

//Individual ex 4
function avgArray(array) {
    let sum = 0;
    let x;
    for (x of array) {
        sum = sum + x;
    }
    return (sum / array.length);
}


let arr = [1, 2, 3, 4];
//console.log(avgArray(arr));

//Individual ex 5
function isInArray(array, number) {
    let x;
    for (x of array) {
        if (x === number)
            return true;
    }
    return false;
}

// console.log(isInArray(arr, 4));
// console.log(isInArray(arr, 0));

//Individual ex 6
function printAllSmaller(array, number) {
    let x;
    console.log("smaller than " + number + " :");
    for (x of array) {
        if (number > x)
            console.log(x);
    }
}

printAllSmaller(arr, 0);
printAllSmaller(arr, 5);