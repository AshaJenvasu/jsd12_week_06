// In JS, a Promise is an object representing the eventual completion (or failure) of an asynchronous operation and its resulting value.

//There are 3 states when a promises runs.
// 1. Pending
// 2. Fullfilled = resolve -> .then((data) => {})
// 3. Rejected = failed -> .catch((error) => {})

//เรียกใช้class ที่ JS สร้างไว้ให้แล้วเราเลยเรียกมันมาได้เลย
const myPromise = new Promise((resolve, reject) => {
  const status = false;

  if (status) {
    resolve("Operation ran successfully!");
  } else {
    reject("Something went wrong!");
  }
});
//แม่พิม output an object

// console.log(myPromise);

myPromise
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log("Process finished.");
  });
