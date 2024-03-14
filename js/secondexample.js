// test score 
let score = 50;
let grade;
let student = false;
if (score >= 90) {
 grade = "A";
} else if (score >= 80) {
    grade = "B";
} else if (score >= 70) {
   grade = "C"; 
} else if (score >= 60) {
    grade = "D";
} else {
 if (student) {
    grade = "U";
 } else {
    grade = "F";
 }
}
console.log(grade);
// yes we can nest if statements inside if statements





