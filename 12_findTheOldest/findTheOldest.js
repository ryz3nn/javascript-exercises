const people = [
      {
        name: "Carly",
        yearOfBirth: 2018,
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
    ]

function getAge(birth, death) {
  if (!death) {
    death = new Date().getFullYear();
  }
  return death - birth;
}

const findTheOldest = function(people) {
  return people.reduce((oldest, currentPerson) => {
    const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
    const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
    if (oldestAge < currentAge) return currentPerson;
    else return oldest;
  },)

  // Sorted version
  // const sorted = people.toSorted((a,b) => {
  //   let firstAge = getAge(a.yearOfBirth, a.yearOfDeath);
  //   let secondAge = getAge(b.yearOfBirth, b.yearOfDeath);
  //   return secondAge - firstAge;
  // })
  // return sorted[0];
};

// Do not edit below this line
module.exports = findTheOldest;
