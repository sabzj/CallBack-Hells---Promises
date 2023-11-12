// Write a function that takes a number as an argument and
// returns a Promise that tests if the value is less than or greater
// than the value 10.
// If it is greater than 10 it is resolved, if it is less than 10 it is
// rejected.
// Call the function and print the resolve and reject in a .then,
// .catch

const numFunc = (num) => {
  return new Promise((resolve, reject) => {
    if (num > 10) {
      resolve("result is resolved");
    } else {
      reject("result is rejected");
    }
  });
};

const num = 14;

numFunc(num)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
