// js array functionlarda ES6 ile birlikte bir çok özellik array sınıflarına kazandırmasına rağmen, sırlama, grouplama, filtereleme, sayfalama gibi client side işlemlerde zayıf kalmaktadır. Bu sebeple lodash gibi kütüphane kullanımı yaygındır.

// ES6 ile gelen array functions

const numbers = [1,2,3,4,5];
const filteredNumbers = numbers.filter(x=> x > 3); // result 4,5
const findeOne = numbers.find(x=> x==3); // result 3; bulamaz ise undefined döndürür.
const unremovedNumbers = numbers.filter(x=> x != 4); // 4 olan değeri sil
numbers.splice(1,1); // index değerine göre silme yapar. 1. indeksten 1 adet sil. ES5 formatı

// dizilerede ekleme çıkarma işlemlerini pop,unpop,push,shift, unshift ile yapmak yerine spread operatörü kullanıyoruz.

const numbers2 = [5,6,7,8];
const newNumbers = [... numbers2, 15,25]; // 5 6 7 8 15 25 (push) apped
const newNumbers2 = [25,63,...numbers2]; // 25 63 5 6 7 8 (shift) preprepend

const names = ["ali","ahmet","hakan"];

names.findIndex(x=> x == "ali"); // 0.index

names.some(x=> x == "ali"); // içinde ali geçen var mı => true

names.some(x=> x.includes("a")); // içerisinde a geçen C# any lamda expression benzer.
// c# contains yerine js de includes var.
names.some(x=> x.startsWith("c")); // c ile başlayan varmı

// Foreach
// Map







