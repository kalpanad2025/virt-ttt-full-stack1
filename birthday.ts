type Person = {
  name12: string;
  birthdate: string; // "YYYY-MM-DD"
};

const people: Person[] = [
  { name12: "Anitha", birthdate: "1990-06-1" },
  { name12: "Archana", birthdate: "1985-06-15" },
  { name12: "Akash", birthdate: "1992-12-01" },
  { name12: "Sathya",birthdate: "2000-01-01" },
];

// Get today's month and day
const today = new Date();
const todayMonth = today.getMonth(); // 0-based month
const todayDate = today.getDate();

const birthdayMessages = people
  .filter(person => {
    const birthDateObj = new Date(person.birthdate);
    return (
      birthDateObj.getMonth() === todayMonth &&
      birthDateObj.getDate() === todayDate
    );
  })
  .map(person => `Today is ${person.name12}'s birthday!`);

if (birthdayMessages.length === 0) {
  console.log("No birthdays today.");
} else {
  console.log(birthdayMessages.join("\n"));
}
