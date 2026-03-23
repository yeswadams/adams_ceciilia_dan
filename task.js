const students = [
  { name: "Alice", marks: 80 }, // passed
  { name: "Bob", marks: 45 }, // failed
  { name: "Charlie", marks: 60 }, // passed
];


function processStudentsData(students) {
  let report = generateReport(students);
  let average = getAverageMarks(students);
  let studentsMarks = getStudentsMarks(students);
  
  return report + "\n" + average + "\n" + studentsMarks;
}

console.log(processStudentsData(students));


function generateReport(students) {
    let report = "";
    students.forEach((student) => {
       report += student.name + " scored " + student.marks + "\n"
    })
    return report
}

function getStudentsMarks(students) {
  let passedStudents = [];
  let failedStudents = [];

  students.forEach((student) => {
    if(student.marks >= 50) {
      passedStudents.push(student.name);
    } else {
      failedStudents.push(student.name);
    }
});
  return "Passed: " + passedStudents.join(", ") + "\n" + "Failed: " + failedStudents.join(", ") + "\n";
}

// console.log(getStudentsMarks(students));
// console.log(generateReport(students));


function getAverageMarks(students) {
    let totalScore = 0;
    students.forEach((student) => {
        totalScore += student.marks; // totalScore = totalScore + student.marks
    })
    return Avarage = "Avarage Score: " + totalScore / students.length  
}


// console.log(getAverageMarks(students));


