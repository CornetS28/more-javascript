let samuelsSciencesBook = {
 title: 'Learn with JavaScript',
 author: 'Paul Dynnn',
 publishDate: '12-12-2010',
 pageCount: '9322'
}

let samuelsGeoBook = {
 title: 'The Earth',
 author: 'Samuel Cornet',
 publishDate: '12-12-2020',
 pageCount: '983'
}

const getSummary = (book) => {
 return {
  summary: `${book.title} by ${book.author}`,
  bookNumberOfPage: `${book.pageCount}`
 }
}
let book1 = getSummary(samuelsGeoBook);
let book2 = getSummary(samuelsSciencesBook);

console.log(book1.summary)