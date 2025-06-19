type Student = {
  name: string;
  grades?: number[];
};

const students: Student[] = [
  { name: "kalpana", grades: [80, 90, 85] },
  { name: "Nila" }, // no grades
  { name: "shiny", grades: [70, 75] },
  { name: "sai", grades: [] }, // empty grades
];

// Function to calculate average of numbers in array
const average = (nums: number[]): number =>
  nums.reduce((sum, val) => sum + val, 0) / nums.length;

// Process students array
const messages = students.map(student => {
  const grades = student.grades;

  // Check if grades exist and are not empty using optional chaining and length check
  if (grades?.length) {
    const avg = average(grades);
    return `Student ${student.name} has an average grade of ${avg.toFixed(2)}`;
  } else {
    return `Student ${student.name} has no grades.`;
  }
});

console.log(messages.join("\n"));

