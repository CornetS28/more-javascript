const notes = [ {
 title: 'My rext trip',
 body: 'today is my birdtday'
}, {
 title: 'About the Bible',
 body: 'jesus s really Lord'
}, {
 title: 'Programming is Nice',
 body: 'What langaufgr do you best know'
}]


// const checkForNotesTitle = (notes, noteTitle) => {
//  const index = notes.findIndex(function (note, index) {
//   return note.title.toLowerCase() === noteTitle.toLowerCase()
//  });
//  return notes[index]

// }

const checkForNotesTitle = (notes, noteTitle) => {
 return notes.find(function (note, index) {
  return note.title.toLowerCase() === noteTitle.toLowerCase()
 });

}

const note = checkForNotesTitle( notes, 'about the Bible' )
console.log(note)