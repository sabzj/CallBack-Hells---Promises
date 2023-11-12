// 1. Write two functions that use Promises that you can chain.
// 2. The first function, makeAllCaps(), will take in an array of words and capitalize them.
// 3. the second function, sortWords() will sort the words in alphabetical order.
// 4.If the array contains anything but strings, it should throw an error.
// 5.Call the functions once with an array of words
// 6. call it once with an array that includes at least one item that is not a word.
// 7. Print the resolve and reject in a .then, .catch.

const makeAllCaps = (words) => {
  return new Promise((resolve, reject) => {
    if (Array.isArray(words)) {
      const capitalizedWords = words.map((word) => {
        if (typeof word === "string") {
          return word.toUpperCase();
        } else {
          // Reject the promise if an element is not a string
          reject("Array contains non-string elements");
        }
      });
      resolve(capitalizedWords);
    } else {
      // Reject the promise if the argument is not an array
      reject("Input is not an array");
    }
  });
};

const sortWords = (words) => {
  return new Promise((resolve, reject) => {
    const wordToSort = words.sort();
    resolve(sortWords);
  });
};

// Example usage:
const words = ["ahmad", "ibrahim", "omar", "salma"];
makeAllCaps(words)
  .then((result) => {
    console.log(result); // This will log the array with capitalized words
  })
  .catch((error) => {
    console.error(error); // This will log any error messages
  });

//-------------------------- try to solve it using foreach method---------------

// const words = ["ahmad", "ibrahim", "omar", "salma"];

// const makeAllCaps = (words) => {
//     return new Promise ((resolve, reject)) {
//         const makeCapital = words.forEach(element => {
//             words[i] = words[i].toUpperCase()
//             resolve (makeAllCaps);
//         });
//     }
// }

// function makeAllCaps(words) {
//     for (let i = 0; i < words.length; i++) {
//       words[i] = words[i].toUpperCase();
//     }
//     console.log(words);
//   }
