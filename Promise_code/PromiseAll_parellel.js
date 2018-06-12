function p1() {
  return new Promise((resolve, reject) => {
      resolve("p1 SUCCESS")
  })
}

function p2() {
  return new Promise((resolve, reject) => {
      resolve("p2 SUCCESS")
  })
}

Promise.all([p1(),p2()]).then(([p1result, p2result])=>{
	console.log({p1result, p2result});
});