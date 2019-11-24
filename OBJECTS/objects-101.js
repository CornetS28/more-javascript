let samuelsBook = {
 title: 'Learn with JavaScript',
 author: 'Samuel Cornet',
 publishDate: '12-12-2020',
 pageCount: '983'
}

console.log(samuelsBook.title);
delete samuelsBook.title
console.log(samuelsBook);

samuelsBook.author = 'Sammy Brooks';
console.log(samuelsBook);

samuelsBook.ISBN = '2122220022';
console.log(samuelsBook);


///------
console.log('--------------------------')



let objNum = {
 num1: 4,
 num3: 7,
 num2: 3,
}
for (el in objNum) {
 console.log(objNum[el])

}
const keyAndValues = Object.entries(objNum)
console.log(keyAndValues + 'pppp')


 
// console.log(el)
console.log(objNum.num1 + objNum.num2 + 'thid th result')
console.log('--------------------------')

console.log('--------------------------')
const userInfo =(name, age, country) => {
 return {
  name, 
  country,
  age, 
 }
}


let userOutput = userInfo("samuel", 35, 'Haiti');
console.log(userOutput)
console.log('--------------------------')