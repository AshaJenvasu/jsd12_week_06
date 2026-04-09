// In JS, a Promise is an object representing the eventual completion (or failure) of an asynchronous operation and its resulting value.

//There are 3 states when a promises runs.
// 1. Pending
// 2. Fullfilled = resolve
// 3. Rejected = failed

//เรียกใช้class ที่ JS สร้างไว้ให้แล้วเราเลยเรียกมันมาได้เลย
new Promise((resolve, reject) => {
  const status = false;

  if (status === true) {
    resolve("Operation ran successfully!");
  } else {
    reject("Something went wrong!");
  }
});
