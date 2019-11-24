
const isValidPassword = function (password) {
 return !password.includes('password') && password.length > 8
}

console.log(isValidPassword('osoopassolll'))