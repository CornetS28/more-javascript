const getTip = (total, tip = .2) => {
 return `I have purchased for ${total}, So I owe you ${total*tip}!`
}
 
let tip = getTip(100)
console.log(tip);