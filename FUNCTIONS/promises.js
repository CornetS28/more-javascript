// Promise
const getDataCallbackfunc = (num, callback) => {
  setTimeout(() => {
    if (typeof num === 'number') {
        callback(undefined, num * 2);
    } else {
        callback('This is the error');
    }
  }, 2000);
};

getDataCallbackfunc(6, (err, data) => {
  if (err) {
    console.log(err)
  } else {
    getDataCallbackfunc(data, (err, data) => {
      if (err) {
        console.log(err)
      } else {
        console.log(data);
      }
    })
  }
});

const getPromiseData = (num) => new Promise((resolve, reject) => {
    setTimeout(() => {
      typeof num === 'number' ? resolve(num * 2) : reject('Number must be provided')
    }, 3000);
  })

getPromiseData(2).then((data) => {
  getPromiseData(data).then((data) => {
    console.log(`This is the promise data: ${data}`)
  }, (err) => {
    console.log(err)
  })
}, (err) => {
  console.log(err)
})

//OR
getPromiseData(6).then((data) => {
  return getPromiseData(data)
}).then((data) => {
  return getPromiseData(data)
}).then((data) => {
  console.log(data)
}).catch((err) => {
  console.log(err)
})