
function sum(x,y) {
  return x+y;
}

var promise = new Promise((resolve,reject) => {
 var result =  sum(5,6);
 resolve(result);
});

promise.then(response => {
  console.log("response", response); // 11 result
});


var promise2 = new Promise((resolve,reject) => {

  setTimeout(() => {
    resolve(10);
  }, 1000);
});


function calculate() {

  promise2.then(value => {
    // resolve ettikten sonra yapmalıyız.
     console.log(value * 5);
  })

  // console.log(value * 5);
  
}

calculate();