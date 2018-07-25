//part 1 -JS
//====================

//Partner Exercise 8
/*var name = prompt("What's your name?");
var age = prompt("What's your age?");
alert(name + " is " + age + " years old.");*/

//Individual Exercise 1
/*var age = prompt("What's your age?");
if (age >= 18) {
    alert("you can drink!");
} else
    alert("your age is under 18, you can't drink");
*/


//Individual Exercise 2
/*var citizenship = prompt("What's your citizenship?");
if (citizenship === "Israeli") {
    alert("you can pass the boarder!");
} else
    alert("your cannot pass the boarder");*/


//Individual Exercise 3
/*var age = prompt("What's your age?");
var gender = prompt("What's your gender?");

if ((age >= 18) && (gender === "female")) {
    alert("hi lady, you can drink for free.");
} else if (age < 18) {
    alert("you can't drink anything.");
} else
    alert("you can drink but you must pay.");*/

//part 2 - JS
//====================

//Fizz Buzz Challenge
/*for (let number = 0; number <= 20; number += 1) {
    if ((!(number % 5)) && (!(number % 3))) {
        console.log(number + " fizzbuzz");
    } else if (!(number % 5)) {
        console.log(number + " fizz");
    } else if (!(number % 3)) {
        console.log(number + " buzz");
    } else
        console.log(number);
}*/

//PARTNER EXERCISE 1
/*const restaurants = ["Moses", "BBB", "Susu&Sons", "Tiger Lilly", "Indi", "Greg"];
for (const s of restaurants) {
    console.log(s);
}*/

/*const numbers = [11, 45, 5, 69, 44, 20, 49, 21, 9, 14, 18, 47, 7, 87, 92, 88, 63, 93, 6, 57, 53, 55, 1, 72, 22, 39, 81, 76, 67, 40, 15, 52, 96, 36, 94, 65, 70, 61, 8, 75, 17, 83, 85, 78, 97, 28, 43, 16, 13, 50, 91, 25, 26, 90, 30, 60, 51, 0, 58, 98, 80, 74, 37, 71, 19, 29, 33, 84, 48, 95, 46, 32, 73, 89, 42, 68, 99, 24, 34, 35, 86, 38, 64, 79, 77, 23, 56, 41, 2, 54, 4, 59, 31, 10, 27, 3, 82, 12, 66, 62];
let sum = 0;
for (const num of numbers) {
    sum = sum + num;
}
console.log(sum);
*/

//PARTNER EXERCISE 3
/*const myColor = ["Red", "Green", "White", "Black"];
var cat = myColor[0];
for (let i = 1; i < myColor.length; i++) {
    cat = cat + " + " + myColor[i];
}
console.log(cat);
*/

//PARTNER EXERCISE 4
/*let str = "0254687193";
let new_str = '';
for (let i = 0; i < str.length - 1; i++) {
    if ((!(str[i] % 2)) && (!(str[i + 1] % 2))) {
        new_str = new_str + str[i] + "-";
    } else
        new_str = new_str + str[i];
}
console.log(new_str);*/

//PARTNER EXTENSION 1 (OPTIONAL)
//find the most freq element in array
const array = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
array.sort();
//console.log(array);
let max_occurr = 1
let res = array[0];
let curr_count = 1;

for (let i = 1; i < array.length; i++) {
    if (array[i] == array[i - 1])
        curr_count++;
    else {
        if (curr_count > max_occurr) {
            max_occurr = curr_count;
            res = array[i - 1];
        }
        curr_count = 1;
    }
}

// In case that the last element is most frequent
if (curr_count > max_occurr) {
    max_occurr = curr_count;
    res = array[array.length - 1];
}

console.log(res);

//PARTNER EXTENSION 2 (OPTIONAL)
const array1 = [182, 28, 30, 40, 41, 150, 199, 71, 77, 173, 181, 147, 91, 192, 166, 60, 34, 188, 113, 130, 25, 59, 82, 170, 79, 11, 112, 92, 104, 69, 42, 2, 125, 99, 39, 29, 160, 131, 178, 159, 121, 21, 200, 15, 194, 14, 54, 138, 145, 195, 85, 120, 10, 118, 33, 106, 132, 198, 58, 64, 83, 140, 5, 35, 50, 18, 84, 129, 174, 197, 96, 93, 128, 13, 16, 187, 9, 80, 27, 153, 23, 102, 52, 158, 4, 97, 65, 143, 110, 7, 86, 176, 87, 149, 98, 165, 66, 139, 155, 161, 6, 74, 196, 48, 144, 185, 88, 177, 68, 72, 116, 37, 142, 127, 180, 154, 61, 141, 191, 63, 136, 22, 32, 186, 49, 156, 103, 168, 109, 70, 115, 183, 111, 44, 90, 12, 123, 124, 75, 100, 184, 189, 162, 107, 164, 148, 152, 101, 94, 73, 8, 95, 163, 146, 46, 81, 117, 26, 175, 20, 105, 114, 157, 62, 108, 78, 51, 3, 119, 134, 172, 17, 193, 55, 126, 169, 135, 179, 45, 89, 47, 151, 43, 171, 19, 36, 167, 67, 56, 76, 24, 57, 38, 122, 53, 1, 137, 31, 133];

function sumCalc(array) {
    let x;
    let sum = 0;
    for (x of array) {
        sum = sum + x;
    }
    return sum;
}

function maxCalc(array) {
    let max = 0;
    for (x of array) {
        if (max < x) {
            max = x;
        }
    }
    return max;
}

function minCalc(array) {
    let min = 1;
    let sum = 0;
    for (x of array) {
        if (min > x) {
            min = x;
        }
    }
    return min;
}
let sum, min, max, n;
sum = sumCalc(array1);
max = maxCalc(array1);
min = minCalc(array1);
n = array1.length;
let calcSerSum = (min + max) * (n + 1) / 2;
res = calcSerSum - sum;
console.log("the missing number is:" + res);