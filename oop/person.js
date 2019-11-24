// Prototypal Inheritance

class Person {
  constructor(firstName, lastName, age, likes = []) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.likes = likes;
  }
  getBio() {
    let bio = `${this.firstName} is ${this.age}. `;
    this.likes.forEach(like => {
      bio += `${this.firstName} likes ${like}. `;
    });
    return bio;
  }
  set fullName(fullName) {
    const names = fullName.split(' ');
    this.firstName = names[0];
    this.lastName = names[1];
  }
}

class Employee extends Person {
  constructor(firstName, lastName, age, position, likes = []) {
    super(firstName, lastName, age, likes);
    this.position = position;
  }
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  getBio() {
    return `${this.fullName} is a ${this.position}.`;
  }

  getYearsLeft() {
    return 65 - this.age;
  }
}

class Student extends Person {
  constructor(firstName, lastName, age, grade, likes = []) {
    super(firstName, lastName, age, likes);
    this.grade = grade;
  }
  get upadateGrade() {
    return this.grade;
  }

  upadateGrade(changingPoints = 0) {
    return (this.grade += changingPoints);
  }

  getGrade(score, totalScore) {
    let gradePercent = (score / totalScore) * 100;
    let gradeInLetter;
    let studentMessageStatus =
      gradePercent >= 60 ? `Passed Succsessfully!` : `Failed!`;
    if (gradePercent >= 90) {
      gradeInLetter = 'A';
      this.grade;
      studentMessageStatus;
    } else if (gradePercent >= 80) {
      gradeInLetter = 'B';
      this.grade;
      studentMessageStatus;
    } else if (gradePercent >= 70) {
      gradeInLetter = 'C';
      this.grade;
      studentMessageStatus;
    } else if (gradePercent >= 60) {
      gradeInLetter = 'D';
      this.grade;
      studentMessageStatus;
    } else {
      gradeInLetter = 'C';
      this.grade;
      studentMessageStatus;
    }
    return `${this.firstName} ${this.lastName}'s grade is a ${gradeInLetter}, (${this.grade}%), Status: ${studentMessageStatus}`;
  }
}

const student1 = new Student('Keren', 'Fleurimond', 25, 78, [
  'Programming, Reading',
]);

console.log(student1.getGrade(78, 100));
console.log(student1.upadateGrade(5));

student1.fullName = 'Daniel Cornet';
console.log(student1.getBio());

const empl = new Employee('Carly', 'Tesnor', 25, 78, ['Programming, Reading']);
console.log(empl.getBio());
