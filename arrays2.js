// TASK 1
/**
 * isArrayLengthOdd(numbers):
 * - receives array `numbers`
 * - returns true if array has an odd number of elements
 * - returns false otherwise
 *
 * e.g.
 * isArrayLengthOdd([1, 2, 3]) -> true
 * isArrayLengthOdd([1, 2, 3, 4]) -> flase
 */
function isArrayLengthOdd(numbers) {
    // Your code here
    if(numbers.length % 2 == 0) {
        return false;
    } else {
        return true;
    }
    // return numbers.length % 2 !== 0;
  }

  console.log(isArrayLengthOdd([1, 2, 3])); 
  console.log(isArrayLengthOdd([1, 2, 3, 4]));
  

  // TASK 2
  /**
 * isArrayLengthEven(numbers):
 * - receives array `numbers`
 * - returns true if array has an even number of elements
 * - returns false otherwise
 *
 * e.g.
 * isArrayLengthEven([1, 2, 3]) -> false
 * isArrayLengthEven([1, 2, 3, 4]) -> true
 */
function isArrayLengthEven(numbers) {
    // Your code here
    if(numbers.length % 2 !== 0) {
        return false;
    } else {
        return true;
    }
    // Your code here : just remove !
    // return numbers.length % 2 === 0;
  }

console.log(isArrayLengthEven([1, 2, 3])); 
console.log(isArrayLengthEven([1, 2, 3, 4]));


// TASK 3
/**
 * addLailaToArray(instructors):
 * - receives array `instructors`
 * - returns a new array that's a copy of array `instructors` with additional string "Laila"
 *
 * e.g.
 * addLailaToArray(["Mshary", "Hasan"]) -> ["Mshary", "Hasan", "Laila"]
 */
function addLailaToArray(instructors) {
    // Your code here
     instructors.push("Laila");
     return instructors
  }
  console.log(addLailaToArray([]));
  console.log(addLailaToArray(["Mshary", "Hasan"]));



// TASK 4
/**
 * eliminateTeam(teams):
 * - receives array `teams`
 * - removes the last element from the array and return it
 *
 * e.g.
 * eliminateTeam(["Brazil", "Germany", "Italy"]) -> "Italy"
 */
function eliminateTeam(teams) {
    // Your code here
    teams.pop();
    return teams
  }

console.log(eliminateTeam(["Brazil", "Germany", "Italy"])); 
