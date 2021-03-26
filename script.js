import time from './time_functions.js'


const date = new Date()

console.log(time.currentDate());

console.log(time.currentTime());

// first number is min value and second number is max value
console.log(time.randomNumberBetween(15, 20));

// first value is count down number
time.countDownFrom(10)