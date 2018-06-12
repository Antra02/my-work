function doSomething() {
  return new Promise((resolve, reject) => {
    console.log("doSomething It is done.");
    // Succeed half of the time.
    const random = Math.random() ;
    if (random > .5) {
      resolve("doSomething SUCCESS"+random)
    } else {
      reject("doSomething FAILURE"+random)
    }
  })
}

function doSomethingElse(result) {
  return new Promise((resolve, reject) => {
    console.log("doSomethingElse It is done.", result, random);
    // Succeed half of the time.
    const random1 = Math.random() ;
    if (random > .5) {
      resolve("doSomethingElse SUCCESS"+random1)
    } else {
      reject("doSomethingElse FAILURE"+ random1)
    }
  })
}

doSomething().then(function(result) {
  return doSomethingElse(result);
}).then(function(finalResult) {
  console.log('Got the final result: ', finalResult);
})
.catch((error)=> console.log("error is",error));