// Isabel Gnewuch
// ITMD 441-01 Undergraduate Student


// Exercise #1

function minMaxAverage(numbers) {
    let totalNumbers = numbers.length;
    let min = numbers[0];
    let max = numbers[0];
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i];
        }
        if (numbers[i] > max) {
            max = numbers[i];
        }
        sum += numbers[i];
    }

    let average = sum / totalNumbers;

    console.log(`Total Numbers: ${totalNumbers}, Min Value: ${min}, Max Value: ${max}, Average: ${average}`);
}

// Test Cases
minMaxAverage([2, 6, 3, 36, 9, 4, 30, 1]);
minMaxAverage([1, 30, 3, 5, 10, 12, 8, 6]);
minMaxAverage([10, 20, 30, 40, 50]);



// Exercise #2

function countVowels(word) {
    let vowels = "aeiouAEIOU";
    let count = 0;

    for (let i = 0; i < word.length; i++) {
        if (vowels.includes(word[i])) {
            count++;
        }
    }

    return count;
}

// Test Cases
let word1 = "Winter";
let word2 = "Programming";
let word3 = "Education";

console.log(`${word1}: ${countVowels(word1)} vowels`);
console.log(`${word2}: ${countVowels(word2)} vowels`);
console.log(`${word3}: ${countVowels(word3)} vowels`);



// Exercise #3

function sortNumbers(arr) {
    return arr.slice().sort(function(a, b) {
        return a - b;
    });
}

// Test Cases
let arr1 = [9, 5, 6, 1];
let arr2 = [5, 13, 8, 9, 10];
let arr3 = [100, 50, 65, 25];

console.log(`Original Array: [${arr1}] Sorted Array: [${sortNumbers(arr1)}]`);
console.log(`Original Array: [${arr2}] Sorted Array: [${sortNumbers(arr2)}]`);
console.log(`Original Array: [${arr3}] Sorted Array: [${sortNumbers(arr3)}]`);



// Exercise #4

function celsiusToFahrenheit(celsius) {
    let c = Number(celsius); // converts string or number to number
    let fahrenheit = (c * 9/5) + 32;

    console.log(`${c.toFixed(1)} Celsius = ${fahrenheit.toFixed(1)} Fahrenheit`);
}

// Test Cases (numbers)
celsiusToFahrenheit(30);
celsiusToFahrenheit(0);
celsiusToFahrenheit(100);

// Additional Tests (strings for graduate requirement)
celsiusToFahrenheit("35");
celsiusToFahrenheit("20");



