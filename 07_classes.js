// ES6 ile birlikte class sınıf yapıları geldi.
// Prototype OOP
// function ES5 de class denk geliyor
function Person(name,surname) {
  // this keyword ile variable field public oluyor
  this.name = name;
  this.surname = surname;
  this.age = 0;

  // method function içinde bir function tanımı olduğunda buda class method kullanılıyor.
  this.fullName  = function () {
    return this.name + " " + this.surname;
  }
}

// class dışında class extende ettik. extension
Person.prototype.setAge = function (age) {
  this.age = age;
}

var p = new Person("ali","tan"); // instance alma
p.setAge(25); // property set işlemi yaptık
console.log('p', p);

function Employee(socialNumber) {
  this.socialNumber = socialNumber;
}

var e = new Employee(1223);
e.__proto__ = p; // inheritance
console.log('e',e);

// person sınıfın prototipine dışarıdan function ekledik.

// TS ve ES6 class tanımları çok benzer
class Human{
  name; // field
  surname; // field
  age; // field
  constructor(name,surname){
    this.name = name;
    this.surname = surname;
  }

  // ES6 ile birlikte getter setter kullanımı
  // getter
  get Age(){
    return this.age;
  }

  // setter
  set Age(value) { // JAVA
    this.age = value;
  }

  // method
  getFullName(){
    return this.name + " " + this.surname;
  }
}

let h = new Human("ali","can");
h.Age = 14; // C# setter kullanımı
h.getFullName();

console.log('h', h);