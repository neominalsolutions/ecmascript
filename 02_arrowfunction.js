// js de method sadece class içerisinde bir aksiyon tanımlıysa var.
// js functional programing language
// js functionlar herhangi bir sınıf içerisinde olmadan kendi başlarına tanımlanabilir.

// 1. Default Function (2 türlü yazılır)

// function isimlerinde camelCase yazım şeklini tercih ederiz.
// js function return type yok
function multiply(x,y) { // return olan bir function

  if(x === undefined || isNaN(x)) {
    x = 1;
    throw new Error('x değeri numeric değil');
  }
    

  if(y === undefined || isNaN(y)) {
    y = 1;
  }
   

  return x * y;
}

function showMessage() {
  alert("Message");
}

// 3 farklı şekilde function çağırabiliriz.
multiply(4,6); // 24
let s1 = multiply(); // NaN, 1
let s2 = multiply(7); // NaN, 7
let s3 = multiply("ali"); // NaN

console.log("s1", "s2","s3", s1,s2,s3);

showMessage();


// 2. Arrow Function