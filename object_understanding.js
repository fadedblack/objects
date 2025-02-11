const getCapital = function (country) {
  const countries = ["India", "United States", "France", "Japan", "Brazil",
    "Australia", "Germany", "Canada", "Italy", "South Korea"];

  const capitals = ["New Delhi", "Washington, D.C.", "Paris", "Tokyo",
    "Brasília", "Canberra", "Berlin", "Ottawa", "Rome", "Seoul"];

  const index = countries.findIndex(function (nation) {
    return nation === country;
  });

  return capitals[index];
};

const details = [
  ["Alice", "9876543210", 25, "123 Elm Street, Springfield"],
  ["Bob", "8765432109", 35, "456 Oak Avenue, Metropolis"],
  ["Charlie", "7654321098", 19, "789 Pine Road, Gotham City"],
  ["Diana", "6543210987", 42, "101 Maple Lane, Smallville"],
  ["Eve", "5432109876", 28, "202 Birch Boulevard, Star City"],
  ["Frank", "4321098765", 31, "303 Cedar Drive, Central City"],
  ["Grace", "3210987654", 18, "404 Willow Way, Coast City"],
  ["Hank", "2109876543", 45, "505 Aspen Circle, Riverdale"],
  ["Ivy", "1098765432", 23, "606 Fir Terrace, Hill Valley"],
  ["Jack", "0198765431", 37, "707 Spruce Court, Twin Peaks"]
];

const withGuardianDetails = [
  ["Aarav", "9876543210", 25, "123 MG Road, Mumbai", ["9123456780", "Suresh"]],
  ["Ananya", "8765432109", 35, "456 Brigade Road, Bengaluru", ["8223456781", "Lakshmi"]],
  ["Ishaan", "7654321098", 19, "789 Park Street, Kolkata", ["8323456782", "Ramesh"]],
  ["Meera", "6543210987", 42, "101 Connaught Place, Delhi", ["8423456783", "Sunita"]],
  ["Rohan", "5432109876", 28, "202 Marine Drive, Chennai", ["8523456784", "Arun"]],
  ["Priya", "4321098765", 31, "303 Sarjapur Road, Hyderabad", ["8623456785", "Geeta"]],
  ["Kavya", "3210987654", 18, "404 Carter Road, Pune", ["8723456786", "Rajesh"]],
  ["Aditya", "2109876543", 45, "505 Residency Road, Ahmedabad", ["8823456787", "Vimala"]],
  ["Naina", "1098765432", 23, "606 MG Road, Jaipur", ["8923456788", "Ashok"]],
  ["Veer", "0198765431", 37, "707 Lodhi Road, Chandigarh", ["9023456789", "Manju"]]
];

// const ageAbove20 = function (names, [name, phone, age, ...address]) {
//   if (age > 20) {
//     names.push(name);
//     return names;
//   }

//   return names;
// };

// const getPeopleAbove20 = function (details) {
//   return details.reduce(ageAbove20, []);
// };

const ageAbove20 = function (details) {
  return details[2] > 20;
};

const getPeopleAbove20 = function (details) {
  return details.filter(ageAbove20).map(function (detail) {
    return [detail[0]];
  });
};

const ageBelow30 = function (detail) {
  return detail[2] < 30;
};

const getPeopleBelow30 = function (details) {
  return details.filter(ageBelow30).map(function (detail) {
    return [detail[0], detail[1], detail[4]].flat();
  });
};

const parentDetails = [
  ["Aarav", 25, 9876543210, "123 MG Road, Mumbai", ["Rohan", 5432109876]],
  ["Ananya", 35, 8765432109, "456 Brigade Road, Bengaluru", ["Lakshmi", 8223456781]],
  ["Ishaan", 19, 7654321098, "789 Park Street, Kolkata", ["Aarav", 9876543210]],
  ["Meera", 42, 6543210987, "101 Connaught Place, Delhi", ["Sunita", 8423456783]],
  ["Rohan", 28, 5432109876, "202 Marine Drive, Chennai", ["Lakshmi", 7654321098]],
  ["Priya", 31, 4321098765, "303 Sarjapur Road, Hyderabad", ["Geeta", 8623456785]],
  ["Kavya", 18, 3210987654, "404 Carter Road, Pune", ["Aditya", 2109876543]],
  ["Aditya", 45, 2109876543, "505 Residency Road, Ahmedabad", ["Vimala", 8823456787]],
  ["Naina", 23, 1098765432, "606 MG Road, Jaipur", ["Meera", 6543210987]],
  ["Veer", 37, 1987654321, "707 Lodhi Road, Chandigarh", ["Rajesh", 8723456786]]
];

const guardianAbove20 = function (detail) {
  return detail[1] > 20;
};

const getNameAgeOfGuardian = function (details) {
  const names = details.map(function (detail) {
    return detail[0];
  });

  const peopleAbove20 = details.filter(function (detail) {
    return detail[1] > 20 && names.includes(detail[4][0]);
  });

  return peopleAbove20.map(function (detail) {
    const output = [detail[4][0]];
    
  });
};

// console.log(getPeopleBelow30(withGuardianDetails));
// console.log(getPeopleAbove20(details));
console.table(getNameAgeOfGuardian(parentDetails));