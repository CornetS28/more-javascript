 const studentScore = (score, maxScore = 100) => {
  let total = (score/20) * 100

  if (total === maxScore || total >= 90) {
   return `Your score is a A, (${total}%)!`
  }
  else if (total <= 89 && total >= 80) {
   return `Your score is a B, (${total}%)!`
  }
  else if (total <= 79 && total >= 70) {
   return `Your score is a D, (${total}%)!`
  } 
  else if (total <= 69 && total >= 60) {
   return `Your score is a C, (${total}%)!`
  } 
  else {
   return `Your score is a F, (${total}%)!`
  }
 };

let result = studentScore(10);
console.log(result);

//OR

const studentGrade = (score, totalScore) => {
 let gradePercent = (score / totalScore) * 100

 if (gradePercent >= 90) {
  letterGrade = 'A'
 }
 else if (gradePercent >= 80) {
  letterGrade = 'B'
 }
 else if (gradePercent >= 70) {
  letterGrade = 'C'
 }
 else if (gradePercent >= 60) {
  letterGrade = 'D'
 } else {
  letterGrade = 'C'
 }
 return `Your score is a ${letterGrade}, (${gradePercent}%)!`
};

let result2 = studentGrade(20, 20);
console.log(result2);
