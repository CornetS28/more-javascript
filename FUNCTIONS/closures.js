const createCounter = () => {
  let count = 0;

  return {
    increment() {
      count++;
    },
    decrement() {
      count--;
    },
    get() {
      return count;
    },
  };
};

const counter = createCounter();

counter.increment();
counter.decrement();
counter.increment();

console.log(counter.get());

const adder = a => {
  return b => {
    return a + b;
  };
};

const add5 = adder(5);

console.log(add5(5));
console.log(add5(-2));

const add30 = adder(30);
console.log(add30(-20));

const createTipper = tipBase => {
  return total => {
    return total * tipBase;
  };
};

const tip20 = createTipper(0.2);

console.log(tip20(100));

console.log('---------------');

const tip = (defaultTip = 0.4) => {
  return total => {
    return total * defaultTip;
  };
};

// const tip40 = tip(48)
console.log(tip()(48));
console.log('---------------');

const averageGrade = (totalGrade = 0) => {
  return numberOfCoursesTaken => {
    return totalGrade / numberOfCoursesTaken;
  };
};

const studentGrade = averageGrade(80);
const result = studentGrade(5);
console.log(result);


console.log('------------------');

const studentFinalGrade = () => {
  let numberOfCoursesTaken = 0;
  let totalNote = 0;

  let result = 0;
  return {
    studentComptedNote(note) {
      totalNote = note;
    },
    studentTotalCoursesTaken(courses) {
      numberOfCoursesTaken = courses;
    },
    getFinalGrade() {
      return (result = totalNote / numberOfCoursesTaken);
    },
  };
};

const studentOfficialGrade = studentFinalGrade();
studentOfficialGrade.studentComptedNote(80);
studentOfficialGrade.studentTotalCoursesTaken(5);

console.log(studentOfficialGrade.getFinalGrade());
