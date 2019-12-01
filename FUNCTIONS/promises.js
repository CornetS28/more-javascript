// Promise
const getDataCallbackfunc = callback => {
  setTimeout(() => {
  // callback(undefined, 'This is the data');
  callback('This is the error', undefined);
  }, 000);
};

getDataCallbackfunc((err, data) => {
  if (err) {
    console.log(err)
  } else {
    console.log(data);
  }
});

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('This is the promise data');
     reject('This is the promise error');
  }, 3000);
})

myPromise.then((data) => {
  console.log(data)
}, (err) => {
  console.log(err)
})