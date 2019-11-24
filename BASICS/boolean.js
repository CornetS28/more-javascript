
let standardRate = 45;
let childrenDiscount = standardRate - 5;
let seniorDiscount = standardRate - 10;
let age = 75;
isChild = age <= 7;
isSenior = age >= 65;

if (isChild) {
 console.log('You are a child, your rate is: ' + childrenDiscount);
} else if (isSenior) {
 console.log('You are a senior, your rate is: ' + seniorDiscount);
} else {
 console.log('Your rate is normal: ' + standardRate);
}
// console.log(isChild);
// console.log(isSenior);


