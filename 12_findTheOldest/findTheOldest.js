const findTheOldest = function(persons) {
    const oldest = persons.sort((a, b) => {
    if(!a.yearOfDeath||!b.yearOfDeath) {
      const thisYear = new Date().getFullYear()
      a.yearOfDeath = thisYear
      b.yearOfDeath = thisYear
    }
    const prev = a.yearOfDeath - a.yearOfBirth
    const next = b.yearOfDeath - b.yearOfBirth
    if(prev > next) {
      return -1
    } else return 1
      
    })
    return oldest[0]
};

//let thisYear = new Date().getFullYear()
// Do not edit below this line
module.exports = findTheOldest;
