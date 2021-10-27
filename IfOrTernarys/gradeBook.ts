export function getGrade(a: number, b: number, c: number) {
    let avg = (a+b+c)/3;
    return avg < 60? "F" :
           avg < 70? "D":
           avg < 80? "C":
           avg <90? "B" : "A";
  }

console.log(getGrade(100, 100, 100) === 'A');
console.log(getGrade(84, 79, 85) === 'B');
console.log(getGrade(60, 82, 76) === 'C');

//   Grade book

//   Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.
//   Numerical Score 	Letter Grade
//   90 <= score <= 100 	'A'
//   80 <= score < 90 	'B'
//   70 <= score < 80 	'C'
//   60 <= score < 70 	'D'
//   0 <= score < 60 	'F'
  
//   Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.
  