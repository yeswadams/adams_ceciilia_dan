function processStudentsData(students) {
  // Initialize accumulators for total score, pass/fail lists, and report string
  let totalScore = 0;
  let passedStudents = [];
  let failedStudents = [];
  let report = "";

  // Loop through each student, so as to find their individual data
  for (let i = 0; i < students.length; i++) {
    let student = students[i];

    // Extract student properties
    let name = student.name;
    let marks = student.marks;

    // Add marks to total → DATA PROCESSING
    totalScore += marks;

    // Check pass/fail → DECISION MAKING
    if (marks >= 50) {
      passedStudents.push(name);
    } else {
      failedStudents.push(name);
    }

    // Build report string → OUTPUT GENERATION
    report += name + " scored " + marks + "\n";
  }

  // Calculate average → DATA PROCESSING
  let average = totalScore / students.length;

  // Append summary to report → OUTPUT GENERATION
  report += "\nAverage Score: " + average + "\n";
  report += "Passed: " + passedStudents.join(", ") + "\n";
  report += "Failed: " + failedStudents.join(", ") + "\n";

  // Print report → OUTPUT
  console.log(report);

  // Return structured result → OUTPUT
  return {
    average: average,
    passed: passedStudents,
    failed: failedStudents,
    report: report
  };
}