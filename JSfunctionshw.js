
// ** PROBLEM 1 | 'sum' function

let number1 = 5;
let number2 = 12;
let sum1 = 0;


function sum(value1, value2) {

    sum1 = number1 + number2;

    return sum1;
}

let answer1 = sum(number1, number2);
console.log(answer1) 

/* IN THE 'sum' FUNCTION ABOVE THE PARAMETERS ARE DEFINED BY CHANGING THE NUMERIC VALUE 
IN THE DEFINITIONOF THE VARIABLE */

let number1 = 0;
let number2 = 0;
let sum1 = 0;


function sum(number1, number2) {

    sum1 = number1 + number2;

    return sum1;
}

let answer1 = sum(5, 6);
console.log(answer1) 

/* IN THIS VERSION OF THE 'sum' FUNCTION, THE PARAMERS ARE DEFINED 
BY THE NUMERIC VALUES OF THE FUNCTION'S INPUTS. I WASN'T SURE WHICH 
WOULD BE MORE GENERAL OR USEFUL, SO PUT BOTH. */

// =================================================================================================

// ** PROBLEM 2 | 'avg' function

let no1 = 0;
let no2 = 0;
let no3 = 0; 
let average = 0;

function avg(no1, no2, no3) {
    average = (no1 + no2 + no3) / 3;

    return average;
}

let answer2 = avg(45, 55, 65);
console.log(answer2);

// =================================================================================================

// ** PROBLEM 3 | 'greaterThan' function







// =================================================================================================

// ** PROBLEM 4 | 'secondLargest' function






// =================================================================================================

// ** PROBLEM 5 | 'containsVowel' function






// =================================================================================================

// ** PROBLEM 6 | 'pigLatin' function 






// =================================================================================================

// ** PROBLEM 7 | 'longestWord' function

let phrase = 'Foreigner is an OK band';

function longestWord(string) {

let phraseSplit = string.split(' ');
let longest = phraseSplit[0];

for (let count7 = 0; count7 < phraseSplit.length; count7++){
    
         if (phraseSplit[count7].length > longest.length) {
                longest = phraseSplit[count7];
         }    
}

return longest

}

let answer7 = longestWord(phrase);
console.log (answer7)
