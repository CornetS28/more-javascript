
let user = {
 name: 'Sammy Cornet',
 age: 90,
};
user.isadmin = true
user["the ball"] = 'red'
console.log(user);

let employee = {
 name: 'Clifford',
 country: 'Haiti',
 ID: 'JHU88422002',
 age: 84,
}

console.log('###################')
// output the keys of the object
for (let key in employee) {
 console.log(key)
}
console.log('###################')
// output the VALUES of the object
for (let key in employee) {
 console.log(employee[key])
}


console.log('###################')

// output keys in order
let codes = {
 "49": "Germany",
 "41": "Switzerland",
 "44": "Great Britain",
 // ..,
 "1": "USA"
};

for (let code in codes) {
 console.log(code); // 1, 41, 44, 49
}


// output keys in given order
let codes2 = {
 "+41": "Switzerland",
 "+44": "Great Britain",
 "+49": "Germany",
 "+1": "USA"
};

for (let code in codes2) {
 console.log(+code); // 1, 41, 44, 49
}


