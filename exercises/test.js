/**
 * TESTING IN NODE JS
 * You can test your functions/promises here. Make sure to remove the 'export' keyword
 * to be able to run the functions successfully with
 * ```node exercises/test.js```
 */

const promise1 = new Promise((res) => setTimeout(res, 4000, "RESOLVED AGAIN"));
const promise2 = Promise.reject("Promise 2 REJECTED");
const promise3 = Promise.resolve("Promise 3 RESOLVED");
const promise4 = new Promise((res) => setTimeout(res, 3000, "RESOLVED AGAIN"));
const promiseArr = [promise1, promise2, promise3, promise4];


const handlePromise1 = Promise.all(promiseArr).catch((e) => e);

const handlePromise2 = (proms) => {
  return Promise.any(proms)
    .then((val) => val)
    .catch((err) => err);
}

const handlePromise3 = (proms) => {
  return Promise.allSettled(proms)
    .then((arr) => arr)
    .catch((err) => err);
}

const newPromiseArr = promiseArr.filter(handlePromise2);

const handlePromise4 = (arr) => {
  return Promise.race(arr)
    .then((val) => val)
    .catch((e) => e);
};

console.log(handlePromise4(newPromiseArr));