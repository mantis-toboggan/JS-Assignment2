
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
IN THE DEFINITIONOF THE VARIABLE. EXAMPLE ABOVE PRINTS '17'.*/

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
WOULD BE MORE GENERAL OR USEFUL, SO PUT BOTH. PARAMETERS (5, 6) 
PRINTS '11'.*/

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

let answer2 = avg(17, 55, 660);
console.log(answer2);

/* PARAMETERS IN THIS SOLUTION ARE DEFINED BY THE NUMERIC VALUES OF INPUTS 
OF THE FUNCTION, NOT BY THE VARIABLES AT THE TOP. FELT LIKE THAT WAS MORE GENERAL.
PARAMETERS (17, 55, 660) AS SHOWN PRINTS '244'. */


// =================================================================================================

// ** PROBLEM 3 | 'greaterThan' function

let parameter1 = 0;
let parameter2 = 0;
let isgreater = false;

function greaterThan(parameter1, parameter2) {

    if (parameter2 > parameter1) {
        isgreater = true;
        console.log('true');
    }

    else { 
        console.log('false');
    }
}

let result = greaterThan(105, 2500);

/* PARAMETERS DEFINED BY NUMERIC VALUES OF FUNCTION'S INPUTS. IN THIS CASE,
INPUT PARAMETERS OF (105, 2500) PRINTS A RESULT OF TRUE, WHILE HYOPTHETICAL
INPUTS OF (105, 25) WOULD PRINT 'FALSE'. */

// =================================================================================================

// ** PROBLEM 4 | 'secondLargest' function

let things = [0, 0, 0, 0, 0];

function secondLargest(things) {

let solution = things[0];

    for (let count4 = 0; count4 < things.length; count4++) {

        if (things[count4] < things[count4++]) {
            solution = things[count4];
        } 

        if (solution < things[count4++]) {
            solution = things[count4++];
        }           
    }
    return solution;
}

let numbers = [1, 4, 3, 2, 5];
let answer4 = secondLargest(numbers);
console.log(answer4);

// This one isn't done yet.


// =================================================================================================

// ** PROBLEM 5 | 'containsVowel' function

// Need help




// =================================================================================================

// ** PROBLEM 6 | 'pigLatin' function 

// Need help.



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

// =============================================================================================

// ** HARD MODE - PROBLEM #8 | 'weave' function


// =============================================================================================

// ** HARD MODE - PROBLEM #9 | 'weave' function


// =============================================================================================

// ** HARD MODE - PROBLEM #10 | 'weave' function



// =============================================================================================

// ** HARD MODE - PROBLEM #11 | 'blackack' function
function blackjack(cards) {

let sum = 0;

for (let i = 0; i < cards.length; i++) {
    if (cards[i] === 'J' || cards[i] === 'Q' || cards[i] === 'K'){
        cards[i] === 10;
    }
    if (cards[i] === 'A') {
        cards[i] = 11;
    }
}

for (let i = 0; i < cards.legth; i++) {
    sum = sum + cards[i];
}
if (sum > 21) {
    for (let i = 0; i < cards.length; i++) {
        if (cards[i] === 11) {
            cards[i]; 1;
        }
    }
}

sum = 0;
for (let i = 0; i < cards.length; i++) {
    sum = sum + cards[i];
}

if (sum > 21) {
    return true;
} else {
    return false
    }
}

console.log(blackjack([7, 3, 4]) + ' should be false');
console.log(blackjack([7, 3, 4, 8, 8, 9]) + ' should be true');
console.log(blackjack(['Q', 8, 'A', 7, 5]) + ' should be false');

// =============================================================================================

// ** HARD MODE - PROBLEM #12 | 'weave' function

// =============================================================================================

// ** HARD MODE PROBLEM #13 | 'weave' function

// =============================================================================================

// ** HARD MODE PROBLEM - #14 | 'weave' function

// =============================================================================================

// ** HARD MODE PROBLEM #15 | 'weave' function

// =============================================================================================

// ** HARD MODE PROBLEM #16 | 'weave' function

// =============================================================================================

// ** HARD MODE PROBLEM #17 | 'weave' function

// =============================================================================================

// ** HARD MODE PROBLEM #18 | 'weave' function

// =============================================================================================

// ** HARD MODE PROBLEM #19 | 'weave' function