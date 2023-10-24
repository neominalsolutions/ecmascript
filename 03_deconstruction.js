// bir dizideki elemanları yada bir objenin propertylerini dışarı değişken değeri olarak çıkarmamızı sağlayan bir yöntem
// C# Tupple benzer bir yöntem

// object deconstruction
const person = {id:1,name:"ali",age:33};
const {age,name} = person;

// clean code açısından önemli bir teknik
console.log('age', age);

// array deconstruction

const names = ["ali","can","hakan","tansu"];

const [first,second,,last] = names; // useState hook çokça kulanacağız.
// names[0]

console.log("first", first);
console.log("last", last);