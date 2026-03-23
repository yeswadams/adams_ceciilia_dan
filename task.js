// function processStudentsData(students) {
//   let totalScore = 0;
//   let passedStudents = [];
//   let failedStudents = [];
//   let report = "";

//   for (let i = 0; i < students.length; i++) {
//     let student = students[i]; // Access the student object

//     let name = student.name; // Accessing the students name within the object
//     let marks = student.marks; // Accessing the students marks within the object

//     totalScore += marks; // totalScore = totalScore + marks

//     if (marks >= 50) {
//       passedStudents.push(name); // .push() adds an element to the end of the passedStudents array
//     } else {
//       failedStudents.push(name); // .push() adds an element to the end of the failedStudents array
//     }

//     report += name + " scored " + marks + "\n"; // report = report + name + " scored " + marks + "\n"
//   }

//   let average = totalScore / students.length; // total / no. of total students

//   report += "\nAverage Score: " + average + "\n"; // report = report + "Average Score: " + average + "\n"
//   report += "Passed: " + passedStudents.join(", ") + "\n"; // report = report + "Passed: " + passedStudents.join(", ") + "\n"
//   // passedStudents = ["Alice", "Bob", "Charlie"]  => "Alice, Bob, Charlie"
//   report += "Failed: " + failedStudents.join(", ") + "\n";

//   console.log(report);

//   return {
//     average: average,
//     passed: passedStudents,
//     failed: failedStudents,
//     report: report,
//   };
// }

const students = [
  { name: "Alice", marks: 80 }, // passed
  { name: "Bob", marks: 45 }, // failed
  { name: "Charlie", marks: 60 }, // passed
];

// processStudentsData(students);

function processStudentsData(students) {
  let studentsMarks = getStudentsMarks(students);
  let average = getAverageMarks(students);
  let report = generateReport(students);
  
  return studentsMarks + "\n" + average + "\n" + report;
}

console.log(processStudentsData(students));

// function getStudents(students) {
//   for (let i = 0; i < students.length; i++) {
//     let student = students[i];
//     let marks = student.marks;
//     let name = student.name; // Use dot notation or bracket notation with a key
//   }
//   return students;
// }

// getStudents(students);
// console.log(getStudents(students));

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

function generateReport(students) {
    let report = "";
    students.forEach((student) => {
       report += student.name + " scored " + student.marks + "\n"
    })
    return report
}


// console.log(getAverageMarks(students));


