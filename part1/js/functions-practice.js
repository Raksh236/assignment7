// STEP 1
function halfNumber(num) {
    const result = num / 2;
    console.log(`Half of ${num} is ${result}.`);
    return result;
}

// STEP 2
function squareNumber(num) {
    const result = num * num;
    console.log(`The result of squaring the number ${num} is ${result}.`);
    return result;
}

// STEP 3
function percentOf(num1, num2) {
    const result = (num1 / num2) * 100;
    console.log(`${num1} is ${result}% of ${num2}.`);
    return result;
}

// STEP 4
function findModulus(num1, num2) {
    const result = num2 % num1;
    console.log(`${result} is the modulus of ${num1} and ${num2}.`);
    return result;
}

// STEP 5
// Function that collects numbers from the user via prompt,
// then calculates and logs the total sum.
function sumNumbers() {
    const input = prompt("Enter numbers separated by commas (e.g., 5, 10, 15):");
    const nums = input.split(","); // Split string into array
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        const n = parseFloat(nums[i].trim()); // Convert string to number safely
        if (!isNaN(n)) {
            sum += n;
        }
    }

    console.log(`The sum of [${nums.join(", ")}] is ${sum}.`);
    return sum;
}

// ----- Sample calls for testing -----
halfNumber(10);
squareNumber(4);
percentOf(2, 8);
findModulus(4, 10);
sumNumbers(); // <-- This one opens the prompt when you load the page
