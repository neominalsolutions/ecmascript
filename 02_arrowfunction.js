// js de method sadece class içerisinde bir aksiyon tanımlıysa var.
// js functional programing language
// js functionlar herhangi bir sınıf içerisinde olmadan kendi başlarına tanımlanabilir.

// 1. Default Function (2 türlü yazılır)

// function isimlerinde camelCase yazım şeklini tercih ederiz.
// js function return type yok
function sum(x,y) { // return olan bir function
  return x * y;
}

function showMessage() {
  alert("Message");
}

// 3 farklı şekilde function çağırabiliriz.
sum(4,6); // 24
let s1 = sum(); // undefined
let s2 = sum(7); // undefined

showMessage();


// 2. Arrow Function