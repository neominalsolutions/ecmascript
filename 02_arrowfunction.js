// js de method sadece class içerisinde bir aksiyon tanımlıysa var.
// js functional programing language
// js functionlar herhangi bir sınıf içerisinde olmadan kendi başlarına tanımlanabilir.

// 1. Default Function (2 türlü yazılır)

// function isimlerinde camelCase yazım şeklini tercih ederiz.
// js function return type yok
function multiply(x,y) { // return olan bir function

  if(x === undefined || isNaN(x)) {
    x = 1;
    // throw new Error('x değeri numeric değil');
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

// js functionda bir obje tipinde olduğunda referance type olduğunda arrow function ifadelerini const ile tanımlamak daha güvenlidir.
const sum = (x,y) => x + y; // => return anlamına gelir
// sum = (a) => a; function referance type olduğu başka bir function atanamaz.

const sum2 = (x,y) => {
  return x + y;
}

// Bu tarz sorunları çözmenin yöntemi ne ? Typescript.
sum();
sum(6);
sum(4,6);

const t = 5;

// functionların içerisinde ecmascript 6 ile birlikte default değer tanımlaması yapabilir.
// default function tanımında da default değer kullanımı yapıalbilir.
// react tarafında arrow function tercih edeceğiz.
const showMessage2 = (message = "arrow function") => {
  alert(message);
}

showMessage2();

// ecmascript 6 ile birlikte functionlarda rest operatör kullanımı geldi.
// ... values rest operators
const average = (... values) => {

  let total = 0;

  for (let index = 0; index < values.length; index++) {
    const value = values[index];
    total+=value;
  }

  return total/ values.length;
}

let r1 = average(10,23,45,67,89); // C# daki params aynısını burada rest operator adı veriliyor.
console.log('r1', r1); // js de string ifadeler tek tırnak tanımlanması bir clean code standartıdır.

// js constructor method overload yok.
// Not js de function overloading yok. (C# method overload var)
