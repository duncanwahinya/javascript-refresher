// let password = "7070";
// let userquess = "";

// while(userquess!== password){
// userquess= prompt("please enter password");
// console.log("welcome");
// }
// 5*4*3*2*1
let number = 5;
let factorial =1;
let original = number;
do {
factorial = factorial * number;
number--;
} while(number>0);

console.log(original + "  factorial  is : " + factorial);